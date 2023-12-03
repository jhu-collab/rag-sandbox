// Combines all notes in a directory into a single text file

import {
  pathToContents,
  repositoryOwnerUsername,
  repositoryName,
} from "./client.js";
import OpenAI from "openai";
import {
  getFilesInNestedGithubDirectory,
  getTextFromGithubFile,
  upsertEnvVariable,
} from "./generate_embeddings_helpers.js";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const outputFilePath = "./output.txt";
  fs.writeFileSync(outputFilePath, "");

  console.log("Getting directories from github...");
  console.log(`Getting content from ${pathToContents}`);
  const basePath = `/repos/${repositoryOwnerUsername}/${repositoryName}/contents/`;
  const noteFiles = await getFilesInNestedGithubDirectory(
    basePath,
    pathToContents
  );
  console.log("\n");

  for (const file of noteFiles) {
    const text = await getTextFromGithubFile(basePath, file);
    // Append text of file to output.txt
    fs.appendFileSync(outputFilePath, text + "\n");
  }

  const file = await openai.files.create({
    file: fs.createReadStream("output.txt"),
    purpose: "assistants",
  });

  // Create openai assistant with the .txt file containing all lecture notes
  const assistant = await openai.beta.assistants.create({
    tools: [{ type: "retrieval" }],
    model: "gpt-4-1106-preview",
    file_ids: [file.id],
  });
  console.log(`Created openai assistant with id ${assistant.id}`);

  // store the assistant id in the .env file
  upsertEnvVariable("OPENAI_ASSISTANT_ID", assistant.id);
}

main();
