# 0000_snapshot.json

Este arquivo contém um snapshot do estado atual do banco de dados após a aplicação de uma migração. Ele está localizado no diretório `drizzle/meta/`.

## Estrutura do Arquivo

- **id**: Identificador único do snapshot.
- **prevId**: Identificador do snapshot anterior.
- **version**: Versão da migração.
- **dialect**: Dialeto SQL utilizado (neste caso, PostgreSQL).
- **tables**: Tabelas presentes no banco de dados com suas especificações.
- **enums**: Enumeradores do banco de dados.
- **schemas**: Schemas do banco de dados.
- **sequences**: Sequências do banco de dados.
- **_meta**: Metadados adicionais.

## Tabelas

### public.urls

A tabela `urls` armazena URLs longas e suas correspondentes URLs curtas. Esta tabela possui as seguintes colunas:

- **id** 
  - Tipo: `serial`
  - Chave Primária: `true`
  - Não Nulo: `true`

- **long_url**
  - Tipo: `varchar`
  - Chave Primária: `false`
  - Não Nulo: `false`

- **short_url**
  - Tipo: `varchar(7)`
  - Chave Primária: `false`
  - Não Nulo: `false`

- **expires_in**
  - Tipo: `timestamp`
  - Chave Primária: `false`
  - Não Nulo: `false`

- **user_id**
  - Tipo: `varchar`
  - Chave Primária: `false`
  - Não Nulo: `false`

- **created_at**
  - Tipo: `timestamp`
  - Chave Primária: `false`
  - Não Nulo: `false`
  - Default: `now()`

- **updated_at**
  - Tipo: `timestamp`
  - Chave Primária: `false`
  - Não Nulo: `false`
  - Default: `now()`

- **deleted_at**
  - Tipo: `timestamp`
  - Chave Primária: `false`
  - Não Nulo: `false`

### Restrições Únicas

- **urls_short_url_unique**
  - Nome: `urls_short_url_unique`
  - Colunas: `short_url`
  - Nulos Não Distintos: `false`

### Índices, Chaves Estrangeiras, Chaves Primárias Compostas, Unique Constraints

- Nenhum índice, chave estrangeira ou chave primária composta além dos já especificados.
  
### Metadados

- **columns**: Metadados das colunas.
- **schemas**: Metadados dos schemas.
- **tables**: Metadados das tabelas.

## Exemplo

```json
{
  "id": "3d3ccb9e-88bf-4394-af7f-57da79148bc7",
  "prevId": "00000000-0000-0000-0000-000000000000",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.urls": {
      "name": "urls",
      "schema": "",
      ...
    }
  },
  "enums": {},
  "schemas": {},
  "sequences": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}
```

## Localização

Arquivo: `drizzle/meta/0000_snapshot.json`