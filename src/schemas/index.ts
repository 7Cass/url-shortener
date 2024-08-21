import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const urls = pgTable("urls", {
  id: serial("id").primaryKey(),
  long_url: varchar("long_url"),
  short_url: varchar("short_url", { length: 7 }).unique(),
  expires_in: timestamp("expires_in"),
  user_id: varchar("user_id"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
  deleted_at: timestamp("deleted_at"),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
});

export default { urls };
