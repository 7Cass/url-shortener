import { Router, Request, Response } from "express";
import { db } from "../config/db";
import { urls } from "../schemas";
import { generateShortUrl } from "../lib/base58";
import { eq } from "drizzle-orm";

const urlRoutes = Router();

urlRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const { url } = req.body;

    if (!url) {
      throw new Error("Url not provided.");
    }

    const shortUrl = generateShortUrl(url);
    const now = Date.now();

    const [dbUrl] = await db
      .insert(urls)
      .values({
        long_url: url,
        short_url: shortUrl,
        expires_in: new Date(now + 5 * 60 * 1000), // 5min,
      })
      .returning();

    return res.status(201).send({ hash: shortUrl });
  } catch (error: any) {
    res.status(400).send({ error: error?.message });
  }
});

urlRoutes.get("/reverse/:hash", async (req: Request, res: Response) => {
  try {
    const { hash } = req.params as { hash: string };

    if (!hash) {
      throw new Error("Hash not provided.");
    }

    const [originalUrl] = await db
      .select({ longUrl: urls.long_url })
      .from(urls)
      .where(eq(urls.short_url, hash));

    if (!originalUrl) {
      throw new Error("URL not found.");
    }

    return res.status(201).send({ originalUrl: originalUrl.longUrl });
  } catch (error: any) {
    res.status(400).send({ error: error?.message });
  }
});

urlRoutes.get("/:shortUrl", async (req: Request, res: Response) => {
  try {
    const { shortUrl } = req.params as { shortUrl: string };

    if (!shortUrl) {
      throw new Error("Missing URL param.");
    }

    const [longUrl] = await db
      .select({ long_url: urls.long_url })
      .from(urls)
      .where(eq(urls.short_url, shortUrl));

    if (!longUrl || !longUrl.long_url) {
      throw new Error("URL not found.");
    }

    res.status(301).redirect(longUrl.long_url);
  } catch (error: any) {
    res.status(400).send({ error: error?.message });
  }
});

export default urlRoutes;
