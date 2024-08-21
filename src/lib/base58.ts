const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const BASE = ALPHABET.length;

function simpleHash(url: string): number {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = (hash << 5) - hash + url.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

function toBase58(hash: number): string {
  let encoded = "";
  while (hash) {
    const remainder = hash % 58;
    hash = Math.floor(hash / 58);
    encoded = ALPHABET[remainder] + encoded;
  }
  return encoded || "1"; // Ensure the result is not empty
}

// Function to generate a random character from the Base58 alphabet
function getRandomBase58Char(): string {
  return ALPHABET[Math.floor(Math.random() * BASE)];
}

export function generateShortUrl(url: string): string {
  // Generate a simple hash from the URL
  const hash = simpleHash(url);

  // Encode the hash using Base58
  let shortUrl = toBase58(hash);

  // Ensure the short URL is between 3 and 7 characters long
  // Pad with random Base58 characters if necessary
  while (shortUrl.length < 3) {
    shortUrl = getRandomBase58Char() + shortUrl;
  }

  // Slice to ensure it doesn't exceed 7 characters
  if (shortUrl.length > 7) {
    shortUrl = shortUrl.slice(0, 7);
  }

  return shortUrl;
}
