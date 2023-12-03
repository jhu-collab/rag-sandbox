import {
  supabase,
  textSplitter,
  vectorStore,
  pathToContents,
  repositoryOwnerUsername,
  repositoryName,
} from "./client.js";
import {
  deleteAllRows,
  getFilesInNestedGithubDirectory,
  getTextFromGithubFile,
} from "./generate_embeddings_helpers.js";

async function main() {
  await deleteAllRows();
  console.log("Getting directories from github...");
  console.log(`Getting content from ${pathToContents}`);
  const basePath = `/repos/${repositoryOwnerUsername}/${repositoryName}/contents/`;
  const noteFiles = await getFilesInNestedGithubDirectory(
    basePath,
    pathToContents
  );

  console.log("Adding file embeddings to supabase vector store...");
  const docs = [];
  for (const file of noteFiles) {
    const text = await getTextFromGithubFile(basePath, file);
    const docsForCurrentDir = await textSplitter.createDocuments([text]);
    docs.push(...docsForCurrentDir);
  }
  vectorStore.addDocuments(docs);
  console.log(`Added ${docs.length} file embeddings to supabase vector store`);
}

main();
