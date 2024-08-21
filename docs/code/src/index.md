# `src/index.ts`

Este arquivo é o ponto de entrada principal da aplicação. Ele configura e inicia o servidor HTTP usando o framework Express.js.

## Dependências Importadas

- `dotenv/config`: Importa configurações de ambiente de um arquivo `.env` para `process.env`.
- `express`: Framework web para Node.js que facilita a criação de servidores HTTP.
- `helmet`: Middleware para ajudar a proteger a aplicação definindo vários cabeçalhos HTTP.
- `express-rate-limit`: Middleware para limitar o número de requisições recebidas.

## Variáveis

- `PORT`: Porta pela qual o servidor vai escutar. Padrão é 3000 se `process.env.PORT` não estiver definido.

## Instância do Aplicativo

- `app`: Instância do servidor Express.

## Middlewares Utilizados

1. `json()`: Middleware que analisa requisições com payload em JSON.
2. `helmet()`: Middleware que adiciona cabeçalhos HTTP para melhorar a segurança.
3. `rateLimit`: Configura um limitador de taxa para o servidor:
    - `windowMs`: Janela de tempo de 15 minutos.
    - `max`: Limite de até 100 requisições por IP por janela de tempo.

## Rotas

- `routes`: Importa e usa as rotas definidas no diretório `src/routes`.

## Servidor

- `app.listen(PORT)`: Inicia o servidor e escuta na porta definida. Loga uma mensagem ao console indicando que o servidor está rodando.

```typescript
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
```

Este arquivo configura de maneira simples e eficiente um servidor Express.js com várias medidas de segurança e limites de requisições para evitar abusos.