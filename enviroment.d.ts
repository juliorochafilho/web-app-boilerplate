declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      MONGO_URI: string;
      MONGO_USERNAME: string;
      MONGO_PASSWORD: string;
      MONGO_PORT: string;
      NODE_ENV: "development" | "production" | "test";
      PORT?: string;
      PWD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
