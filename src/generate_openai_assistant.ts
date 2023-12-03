// Combines all notes in a directory into a single text file

import {
  pathToContents,
  githubPersonalAccessToken,
  repositoryOwnerUsername,
  repositoryName,
  octokit,
} from "./client.js";
import cheerio from "cheerio";
import path from "path";
import pdfJS from "pdfjs-dist/build/pdf.js";
import pkg from "pdfjs-dist";
import PDFJSWorker from "pdfjs-dist/build/pdf.worker.js";
import { TextItem } from "pdfjs-dist/types/src/display/api.js";
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Needed to use pdfjs-dist in node and parse PDFs
pdfJS.GlobalWorkerOptions.workerSrc = PDFJSWorker;

async function getGithubDirectory(path) {
  console.log(`Getting content from ${path}`);
  const response = await octokit.request(`GET ${path}`, {
    owner: repositoryOwnerUsername,
    repo: repositoryName,
    path: path,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return response.data;
}

function getTextGivenMarkdownBase64(base64encodedText) {
  const decodedText = Buffer.from(base64encodedText.content, "base64").toString(
    "utf-8"
  );
  // Remove html tags using cheerio
  const $ = cheerio.load(decodedText);
  const cleanText = $.text();
  return cleanText;
}

async function getTextGivenPDFBase64(base64encodedText) {
  const { getDocument } = pkg;
  const binaryData = atob(base64encodedText.content);
  let uint8Array = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }
  async function extractText(pdfData: Uint8Array): Promise<string> {
    let textContent: string = "";
    const pdf = await getDocument({ data: pdfData }).promise;
    const numPages = pdf.numPages;

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const textPage = await page.getTextContent();
      textContent += textPage.items.map((item: TextItem) => item.str).join(" ");
    }
    return textContent;
  }

  const text = await extractText(uint8Array);
  return text;
}

async function main() {
  const outputFilePath = "./output.txt";
  fs.writeFileSync(outputFilePath, "");

  console.log("Getting directories from github...");
  console.log(`Getting content from ${pathToContents}`);
  const basePath = `/repos/${repositoryOwnerUsername}/${repositoryName}/contents/`;
  const notes = await getGithubDirectory(`${basePath}${pathToContents}`); // Gets a list of directories, each containing a list of markdown files
  const markdownDirectories = [];
  for (const note of notes) {
    // Get all markdown files in each subdirectory
    const noteResponse = await getGithubDirectory(
      `${basePath}${pathToContents}/${note.name}`
    );
    markdownDirectories.push(...noteResponse);
  }
  console.log("\n");

  const docs = [];
  for (const file of markdownDirectories) {
    const base64encodedText = await getGithubDirectory(
      `${basePath}${file.path}`
    );
    let cleanText;
    if (path.extname(file.name) == ".md") {
      cleanText = getTextGivenMarkdownBase64(base64encodedText);
    } else if (path.extname(file.name) == ".pdf") {
      cleanText = await getTextGivenPDFBase64(base64encodedText);
    }
    // Append text of current markdown file to output.txt
    fs.appendFileSync(outputFilePath, cleanText + "\n");
  }

  const file = await openai.files.create({
    file: fs.createReadStream("output.txt"),
    purpose: "assistants",
  });

  const assistant = await openai.beta.assistants.create({
    tools: [{ type: "retrieval" }],
    model: "gpt-4-1106-preview",
    file_ids: [file.id],
  });

  // store the assistant id in the .env file
  fs.writeFileSync(
    "./.env",
    `OPENAI_ASSISTANT_ID=${assistant.id}\n${fs.readFileSync("./.env")}`
  );
}

main();
