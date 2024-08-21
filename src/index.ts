import "dotenv/config";

import express, { json } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from "./routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

app.use(routes);

app.listen(PORT, () =>
  console.log(`🦊 Server running at http://localhost:${PORT}`)
);
