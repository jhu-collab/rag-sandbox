import pdfJS from "pdfjs-dist/build/pdf.js";
import pkg from "pdfjs-dist";
import PDFJSWorker from "pdfjs-dist/build/pdf.worker.js";
import cheerio from "cheerio";
import { octokit, supabase } from "./client.js";
import { TextItem } from "pdfjs-dist/types/src/display/api.js";
import path from "path";
import fs from "fs";
import {
  repositoryOwnerUsername,
  repositoryName,
} from "../notes_repository_info.js";

// Needed to use pdfjs-dist in node and parse PDFs
pdfJS.GlobalWorkerOptions.workerSrc = PDFJSWorker;

// Helper to get a directory from github
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

// Helper to convert base64 encoded markdown to text
function getTextGivenMarkdownBase64(base64encodedText) {
  const decodedText = Buffer.from(base64encodedText.content, "base64").toString(
    "utf-8"
  );
  // Remove html tags using cheerio
  const $ = cheerio.load(decodedText);
  const cleanText = $.text();
  return cleanText;
}

// Helper to convert base64 encoded pdf to text
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

// Returns a flat array of files in a nested github directory
export async function getFilesInNestedGithubDirectory(
  basePath,
  pathToContents
) {
  const notes = await getGithubDirectory(`${basePath}${pathToContents}`); // Gets a list of directories, each containing a list of markdown files
  const files = [];
  for (const note of notes) {
    // Get all markdown files in each subdirectory
    const noteResponse = await getGithubDirectory(
      `${basePath}${pathToContents}/${note.name}`
    );
    files.push(...noteResponse);
  }
  return files;
}

// Returns the plain text of a file on github given it's path
export async function getTextFromGithubFile(basePath, file) {
  const base64encodedText = await getGithubDirectory(`${basePath}${file.path}`);
  if (path.extname(file.name) == ".md") {
    return getTextGivenMarkdownBase64(base64encodedText);
  } else if (path.extname(file.name) == ".pdf") {
    return await getTextGivenPDFBase64(base64encodedText);
  }
}

// Delete all rows in the supabase vector store
export async function deleteAllRows() {
  console.log("Deleting all rows in supabase...");
  const { data, error } = await supabase
    .from("documents")
    .delete()
    .neq("id", 0);
  if (error) {
    console.log(error);
  }
}

// Inserts the given key value pair into the .env file if it doesn't exist; otherwise, updates the value of the key
export function upsertEnvVariable(key, value) {
  const envPath = ".env";
  const envContents = fs.readFileSync(envPath, "utf-8");
  const envVariables = envContents.split("\n");

  // Check if the key exists
  let keyExists = false;
  const updatedVariables = envVariables.map((variable) => {
    const [currentKey] = variable.split("=");
    if (currentKey === key) {
      keyExists = true;
      return `${key}=${value}`;
    }
    return variable;
  });
  if (!keyExists) {
    updatedVariables.push(`${key}=${value}`);
  }
  fs.writeFileSync(envPath, updatedVariables.join("\n"));
}
