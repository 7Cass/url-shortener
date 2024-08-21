# Documentação do Projeto URL Shortener

## Estrutura de Diretórios e Arquivos

Este documento descreve a estrutura da pasta e dos arquivos do projeto "URL Shortener". A seguir, apresentamos a descrição detalhada de cada diretório e arquivo.

### drizzle

Contém arquivos de configuração e metadados relacionados ao banco de dados.

#### drizzle/0000_create_urls_table.sql

Script SQL para a criação da tabela `urls`.

#### drizzle/meta

Diretório responsável por armazenar metadados relacionados ao estado do banco de dados.

##### drizzle/meta/0000_snapshot.json

Snapshot do estado inicial do banco de dados após a aplicação do primeiro script de migração.

##### drizzle/meta/_journal.json

Arquivo de log que registra o histórico de migrações aplicadas ao banco de dados.

### src

Contém o código fonte da aplicação, dividido em múltiplos módulos.

#### src/index.ts

Ponto de entrada principal da aplicação.

#### src/config

Diretório contendo configurações específicas da aplicação.

##### src/config/db.ts

Arquivo de configuração do banco de dados.

#### src/lib

Bibliotecas e utilitários utilizados na aplicação.

##### src/lib/base58.ts

Funções de codificação e decodificação base58.

#### src/routes

Contém os arquivos de roteamento da aplicação.

##### src/routes/index.ts

Arquivo de roteamento principal.

##### src/routes/url.ts

Manipulação de rotas relacionadas a URLs.

#### src/schemas

Contém os schemas utilizados para validação de dados.

##### src/schemas/index.ts

Schema principal de validação.

### Arquivos na raiz do projeto

- **drizzle.config.ts**: Configuração do Drizzle, uma ferramenta de migração de banco de dados.
- **package.json**: Arquivo de configuração do npm contendo dependências do projeto e scripts de build.
- **pnpm-lock.yaml**: Arquivo de lock do pnpm para garantir a consistência das dependências.

## Diretório `drizzle/meta`

O diretório `meta` dentro de `drizzle` possui um papel fundamental na gestão e controle das migrações do banco de dados. Aqui é onde ficam armazenados os metadados que documentam e rastreiam as mudanças no esquema do banco de dados.

### Arquivos

- `0000_snapshot.json`: Contém um snapshot do estado do banco de dados após a primeira migração. Este arquivo é crucial para o controle e gerenciamento das migrações, assegurando que as alterações no banco de dados sejam aplicadas de forma ordenada e consistente.
  
- `_journal.json`: Mantém um log detalhado das migrações aplicadas. Este arquivo rastreia o histórico de todas as modificações, permitindo uma auditoria precisa e a possibilidade de reverter alterações, se necessário.

## Conclusão

A estrutura de diretórios e arquivos do projeto "URL Shortener" é organizada para facilitar a gerência do código fonte e das migrações do banco de dados. Os diretórios e arquivos são divididos de forma lógica, permitindo uma fácil navegação e manutenção do projeto.