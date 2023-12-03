import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Octokit } from "@octokit/core";
dotenv.config();

export const repositoryOwnerUsername = "K02D";
export const repositoryName = "retrieval-augmented-generation";
export const pathToContents = "notes";
export const githubPersonalAccessToken = process.env.GH_PERSONAL_ACCESS_TOKEN;

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export const openAIApiKey = process.env.OPENAI_API_KEY;

export const octokit = new Octokit({
  auth: githubPersonalAccessToken,
});

export const vectorStore = await SupabaseVectorStore.fromExistingIndex(
  new OpenAIEmbeddings({ openAIApiKey }),
  {
    tableName: "documents",
    queryName: "match_documents",
    client: supabase,
  }
);

export const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 200,
  chunkOverlap: 50,
});
