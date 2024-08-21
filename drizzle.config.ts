import { Config, defineConfig } from "drizzle-kit";

console.log("TESTE", process.env.POSTGRES_URL);

export default defineConfig({
  schema: "./src/schemas",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
}) satisfies Config;
