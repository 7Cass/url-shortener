# 0000_create_urls_table.sql

## Descrição
Este script de SQL cria a tabela `urls` se ela não existir. A tabela é usada para armazenar URLs longas e suas correspondentes versões encurtadas, juntamente com informações adicionais como datas de criação e expiração, e o usuário que criou a URL.

## Estrutura da Tabela

### Campo `id`
- **Tipo:** `serial`
- **Descrição:** Identificador único e primário da tabela, não nulo.
- **Detalhes:** É incrementado automaticamente.

### Campo `long_url`
- **Tipo:** `varchar`
- **Descrição:** URL original que foi encurtada.

### Campo `short_url`
- **Tipo:** `varchar(7)`
- **Descrição:** Representação única encurtada da URL longa.
- **Restrição:** Este campo deve ser exclusivo dentro da tabela (`UNIQUE`).

### Campo `expires_in`
- **Tipo:** `timestamp`
- **Descrição:** Data e hora em que a URL encurtada expira.

### Campo `user_id`
- **Tipo:** `varchar`
- **Descrição:** Identificador do usuário que criou a URL.

### Campo `created_at`
- **Tipo:** `timestamp`
- **Descrição:** Data e hora em que a URL foi criada.
- **Padrão:** O valor padrão é a data e hora atuais (`DEFAULT now()`).

### Campo `updated_at`
- **Tipo:** `timestamp`
- **Descrição:** Data e hora da última atualização na URL.
- **Padrão:** O valor padrão é a data e hora atuais (`DEFAULT now()`).

### Campo `deleted_at`
- **Tipo:** `timestamp`
- **Descrição:** Data e hora em que a URL foi marcada como deletada.

## Restrições
- **UNIQUE ("short_url")**: Assegura que o campo `short_url` seja único em toda a tabela.

## Script SQL

```sql
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
```