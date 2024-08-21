# `src/schemas/index.ts`

## Descrição do Arquivo

Este arquivo define e exporta esquemas de tabelas para um banco de dados PostgreSQL utilizando a biblioteca `drizzle-orm/pg-core`. Ele inclui as definições das tabelas `urls` e `users`.

## Conteúdo

### Importações

```typescript
import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
```

As seguintes funções e tipos são importados da biblioteca `drizzle-orm/pg-core`:
- `pgTable`: Utilizado para definir uma tabela PostgreSQL.
- `serial`: Tipo de dado correspondente a uma coluna serial (incremento automático).
- `varchar`: Tipo de dado correspondente a uma coluna de string variada.
- `timestamp`: Tipo de dado correspondente a uma coluna de data e hora.

### Definição da Tabela `urls`

```typescript
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
```

A tabela `urls` possui as seguintes colunas:
- `id`: Coluna serial que serve como chave primária.
- `long_url`: Coluna do tipo `varchar` para armazenar a URL longa.
- `short_url`: Coluna do tipo `varchar` com comprimento de 7 caracteres, única, para armazenar a URL curta.
- `expires_in`: Coluna do tipo `timestamp` para armazenar a data e hora de expiração da URL.
- `user_id`: Coluna do tipo `varchar` para armazenar o ID do usuário.
- `created_at`: Coluna do tipo `timestamp` que recebe automaticamente a data e hora atual na criação do registro.
- `updated_at`: Coluna do tipo `timestamp` que recebe automaticamente a data e hora atual na atualização do registro.
- `deleted_at`: Coluna do tipo `timestamp` para armazenar a data e hora de deleção lógica do registro.

### Definição da Tabela `users`

```typescript
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
});
```

A tabela `users` possui a seguinte coluna:
- `id`: Coluna serial que serve como chave primária.

### Exportação Padrão

```typescript
export default { urls };
```

O objeto padrão exportado contém apenas a tabela `urls`.

## Notas Adicionais

- A biblioteca `drizzle-orm/pg-core` é utilizada para simplificar a definição e manipulação de tabelas em um banco de dados PostgreSQL.
- A tabela `urls` inclui campos de tempo (`created_at`, `updated_at` e `deleted_at`) para rastrear o ciclo de vida do registro.

## Estrutura do Código

O código segue uma estrutura clara e concisa para definir tabelas de banco de dados, facilitando a manutenção e expansão futura.

---

Esta documentação cobre a definição e o propósito das tabelas `urls` e `users` como implementadas no arquivo `src/schemas/index.ts`.