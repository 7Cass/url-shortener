# `url.ts`

This module defines the URL routes for managing URL shortening and redirection. It leverages the Express.js framework for routing HTTP requests and handles operations with a database configured in `db.ts`.

## Imports

- `Router`, `Request`, `Response`: Imported from `express` for handling HTTP routes and requests.
- `db`: Database instance imported from `../config/db`.
- `urls`: Database schema imported from `../schemas`.
- `generateShortUrl`: Function to generate shortened URLs, imported from `../lib/base58`.
- `eq`: Helper function from `drizzle-orm` for SQL equality comparison.

## Routes

### `POST /`

This route shortens a given URL.

**Request Body:**
- `url`: The long URL to be shortened.

**Response:**
- `201`: On success, returns a JSON object containing the `hash` (shortened URL).
- `400`: On failure, returns an error message.

**Code:**
```typescript
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
        expires_in: new Date(now + 5 * 60 * 1000), // 5min
      })
      .returning();

    return res.status(201).send({ hash: shortUrl });
  } catch (error: any) {
    res.status(400).send({ error: error?.message });
  }
});
```

### `GET /reverse/:hash`

This route expands a shortened URL back to the original long URL.

**Route Parameters:**
- `hash`: The shortened URL hash.

**Response:**
- `201`: On success, returns the `originalUrl`.
- `400`: On failure, returns an error message.

**Code:**
```typescript
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
```

### `GET /:shortUrl`

This route redirects to the original long URL based on the shortened URL.

**Route Parameters:**
- `shortUrl`: The shortened URL.

**Response:**
- `301`: On success, redirects to the original long URL.
- `400`: On failure, returns an error message.

**Code:**
```typescript
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
```

## Export

- `urlRoutes`: The defined Router instance for URL management.

```typescript
export default urlRoutes;
```

## Summary

This module sets up Express routes to handle the following operations:
1. Shortening a long URL (`POST /`).
2. Retrieving the original URL using a shortened hash (`GET /reverse/:hash`).
3. Redirecting to the original URL using the shortened URL (`GET /:shortUrl`).