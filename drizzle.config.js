import { ENV } from "./src/config/env";

// Drizzle ORM configuration for migrations
// This configuration file specifies the schema file, output directory for migrations,
export default {
  schema: "./src/db/schema.js",
  out :"./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {url:ENV.DATABASE_URL},
};