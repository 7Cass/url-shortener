# src/config/db.ts

Este arquivo é responsável pela configuração e migração do banco de dados utilizando a biblioteca `drizzle-orm` com `postgres-js`.

## Importações

```typescript
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
```

1. **drizzle**: Função principal da biblioteca `drizzle-orm` para integração com o banco de dados PostgreSQL.
2. **migrate**: Função utilizada para gerenciar migrações de banco de dados.
3. **postgres**: Cliente PostgreSQL da biblioteca `postgres-js`.

## Configuração do PostgreSQL

```typescript
const pg = postgres({
  host: process.env.DB_HOST as string,
  port: process.env.DB_PORT as unknown as number,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_DATABASE as string,
  onnotice: () => {},
});
```

Configura o cliente PostgreSQL com base em variáveis de ambiente. As variáveis de ambiente utilizadas são:
- `DB_HOST`: Endereço do host do banco de dados.
- `DB_PORT`: Porta do banco de dados.
- `DB_USER`: Usuário do banco de dados.
- `DB_PASSWORD`: Senha do banco de dados.
- `DB_DATABASE`: Nome do banco de dados.

Um callback `onnotice` vazio é passado para evitar logs de notificações.

## Exportação da Instância do Banco de Dados

```typescript
export const db = drizzle(pg);
```

A instância configurada do banco de dados é criada utilizando a função `drizzle` e exportada para ser utilizada em outras partes da aplicação.

## Migração do Banco de Dados

```typescript
migrate(db, { migrationsFolder: "./drizzle" });
```

A função `migrate` é chamada para aplicar as migrações do banco de dados. O diretório das migrações é especificado como `./drizzle`.

## Resumo

O arquivo `src/config/db.ts` configura a conexão com um banco de dados PostgreSQL utilizando variáveis de ambiente, cria uma instância do banco de dados com `drizzle-orm` e aplica migrações utilizando a configuração de migrações localizada na pasta `./drizzle`.