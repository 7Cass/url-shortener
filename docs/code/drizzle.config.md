# `drizzle.config.ts`

## Descrição

Este arquivo é a configuração para o `drizzle-kit`, uma ferramenta de migração de banco de dados. Ele define os parâmetros necessários para a conexão com o banco de dados, bem como o local dos esquemas e saídas gerados.

## Importações

O arquivo importa `Config` e `defineConfig` do pacote `drizzle-kit`.

```typescript
import { Config, defineConfig } from "drizzle-kit";
```

## Log de Ambiente

Antes de definir a configuração, o arquivo registra a variável de ambiente `POSTGRES_URL` no console.

```typescript
console.log("TESTE", process.env.POSTGRES_URL);
```

## Definição da Configuração

A configuração é definida utilizando a função `defineConfig`, que especifica:

- `schema`: O caminho para os arquivos de esquema do banco de dados.
- `out`: O diretório de saída para os arquivos gerados pelo `drizzle-kit`.
- `dialect`: O tipo de banco de dados utilizado (neste caso, `postgresql`).
- `dbCredentials`: As credenciais de acesso ao banco de dados.

Estas configurações devem satisfazer a interface `Config`.

```typescript
export default defineConfig({
  schema: "./src/schemas",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
}) satisfies Config;
```

## Variáveis de Ambiente

- `POSTGRES_URL`: URL de conexão ao banco de dados PostgreSQL. Esta variável deve ser configurada no ambiente onde a aplicação está sendo executada.

## Estrutura de Saída e Schema

- **Schema:** Os arquivos de esquema do banco de dados estão localizados no diretório `./src/schemas`.
- **Saída:** Os arquivos gerados pelo `drizzle-kit`, incluindo migrações e snapshots, serão armazenados no diretório `./drizzle`.

## Dialeto do Banco de Dados

- **PostgreSQL:** O arquivo está configurado para utilizar o dialeto `postgresql`. 

## Exemplos de Configuração

### Configuração Básica

Quando o arquivo é executado com a variável de ambiente `POSTGRES_URL` devidamente configurada:

```shell
POSTGRES_URL=your_postgres_url_here node drizzle.config.ts
```

### Configuração de Desenvolvimento

No desenvolvimento, você pode usar um arquivo `.env` para definir a variável `POSTGRES_URL`.

```plaintext
# .env
POSTGRES_URL=your_development_postgres_url_here
```

A partir do código, utilize uma biblioteca de leitura de arquivos `.env` para carregar essas variáveis.

```typescript
import * as dotenv from 'dotenv';

dotenv.config();

console.log("TESTE", process.env.POSTGRES_URL);
```