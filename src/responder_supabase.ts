// Responds with context provided by embeddings stored in supabase

import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { openAIApiKey } from "./client.js";
import { vectorStore } from "./client.js";
import { questions } from "./questions.js";

const model = new OpenAI({ openAIApiKey });

// Initialize a retriever wrapper around the vector store
const vectorStoreRetriever = vectorStore.asRetriever();

const template = `Be as concise as possible in your responses. 
Convert LaTeX to unformatted text: convert "( \Omicron(\lg n) )" to "O(log n)". Always try
to respond using information from the knowledge base. If the question isn't about data structures,
reply with "I don't assist with anything unrelated to data structures". Limit your responses to 20 tokens.
Don't include sources in your response. When asked for specific answer, give the answer first and then an explanation.`;
const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever, {});

const promises = questions.map(async (question) => {
  const [similarDocuments, res] = await Promise.all([
    vectorStore.similaritySearch(question, 2), // get the 2 most similar documents
    chain.call({
      query: `${question}. ${template}`,
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
