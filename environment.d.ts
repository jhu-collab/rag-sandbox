declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPENAI_ASSISTANT_ID: string;
      OPENAI_API_KEY: string;
      SUPABASE_DATABASE_PASSWORD: string;
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
      GH_PERSONAL_ACCESS_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
