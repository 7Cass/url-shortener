CREATE TABLE IF NOT EXISTS "urls" (
	"id" serial PRIMARY KEY NOT NULL,
	"long_url" varchar,
	"short_url" varchar(7),
	"expires_in" timestamp,
	"user_id" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	CONSTRAINT "urls_short_url_unique" UNIQUE("short_url")
);
