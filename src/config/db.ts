import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const pg = postgres({
  host: process.env.DB_HOST as string,
  port: process.env.DB_PORT as unknown as number,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_DATABASE as string,
  onnotice: () => {},
});

export const db = drizzle(pg);

migrate(db, { migrationsFolder: "./drizzle" });
