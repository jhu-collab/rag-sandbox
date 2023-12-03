// Responds with context provided by embeddings stored in supabase

import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { openAIApiKey } from "./client.js";
import { vectorStore } from "./client.js";
import { questions } from "./questions.js";
import { customInstructions } from "./model_custom_instructions.js";

const model = new OpenAI({ openAIApiKey });

// Initialize a retriever wrapper around the vector store
const vectorStoreRetriever = vectorStore.asRetriever();

// Initialize a chain with the model and retriever. This augments the prompts provided to the chain with relevant documents from the vector store
const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever, {});

const promises = questions.map(async (question) => {
  const [similarDocuments, res] = await Promise.all([
    vectorStore.similaritySearch(question, 2), // get the 2 most similar documents
    chain.call({
      query: `${question}. ${customInstructions}`,
    }),
  ]);
  return { question, answer: res.text, similarDocuments };
});

async function getResponses() {
  const responses = await Promise.all(promises);
  responses.forEach(({ question, answer, similarDocuments }) => {
    console.log(`Question: ${question}`);
    console.log(`Answer: ${answer}\n`);
    // Uncomment the following code to see the similar documents fetched by the supabase vector store

    // similarDocuments.forEach((doc, i) => {
    //   console.log(`Similar document ${i + 1}`);
    //   const pageContent = doc.pageContent;
    //   // Remove all newlines from page content
    //   const pageContentNoNewlines = pageContent.replace(/\n/g, "");
    //   console.log(pageContentNoNewlines);
    //   console.log(
    //     `lines ${doc.metadata.loc.lines.from} to ${doc.metadata.loc.lines.to}`
    //   );
    //   console.log("\n");
    // });
    // console.log("--------------------------------------------------");
  });
}

getResponses();
