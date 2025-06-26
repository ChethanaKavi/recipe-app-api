import "dotenv/config";

// This file is used to load environment variables from a .env file
// and to provide a consistent interface for accessing them throughout the application.
export const ENV = {
    PORT: process.env.PORT || 5001,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
};