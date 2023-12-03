### Local Setup:

Run `npm i`

Create a `.env` file with all environment variables defined in `environment.d.ts`

### Scripts:

`npm run generate-supabase-embeddings`: generates word embeddings from lecture notes and stores them in a supabase vector store

`npm run generate-openai-assistant`: generates an openai assistant with all lecture notes passed in as additional context

`npm run responder-supabase`: responds to questions by augmenting them with relevant documents from the supabase vector store

`npm run responder-openai`: responds to questions using openai's assistant, which leverages retrieval-augmented generation under the hood

### Key Files:

`notes_repository_info.ts`: information about the github repository where the lecture notes are stored

`questions.ts` contains the questions that the responders will respond to

`model_custom_instructions.ts` contains the custom instructions fed to each responder
