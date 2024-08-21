# Estrutura de Diretórios do Projeto

Este documento descreve a estrutura da pasta `src` usada no projeto.

## Tabela de Conteúdos
- [Visão Geral](#visão-geral)
- [Diretórios](#diretórios)
  - [src/config](#srcconfig)
  - [src/lib](#srclib)
  - [src/routes](#src/routes)
  - [src/schemas](#src/schemas)
- [Arquivos](#arquivos)
  - [src/index.ts](#srcindexts)

## Visão Geral

A pasta `src` é o diretório principal que contém o código-fonte da aplicação. A seguir, detalharemos a funcionalidade de cada subdiretório e arquivo dentro de `src`.

## Diretórios

### `src/config`
Contém configurações da aplicação que são essenciais para inicialização e operação.

- **Arquivos:**
  - `db.ts`: Configurações e inicializações relacionadas ao banco de dados.

### `src/lib`
Contém bibliotecas e utilitários que são usados em várias partes do código.

- **Arquivos:**
  - `base58.ts`: Implementações e utilitários para codificação e decodificação Base58.

### `src/routes`
Contém a definição das rotas da API.

- **Arquivos:**
  - `index.ts`: Ponto de entrada para declarar e configurar todas as rotas.
  - `url.ts`: Rotas relacionadas a operações com URLs.

### `src/schemas`
Contém definidores de esquemas de dados que são usados para validação e manipulação de dados.

- **Arquivos:**
  - `index.ts`: Ponto de entrada para declaração de todos os esquemas.

## Arquivos

### `src/index.ts`
Ponto de entrada principal da aplicação. Aqui, a aplicação é inicializada e configurada para começar a rodar.

## Observações

- Todos os arquivos TypeScript (`.ts`) devem seguir padrões de nomenclatura e conformidade com as melhores práticas de desenvolvimento.
- As configurações do banco de dados em `src/config/db.ts` devem respeitar normas de segurança e boas práticas de conexão e autenticação.
- As rotas definidas em `src/routes` devem ser bem estruturadas para facilitar futuras extensões e manutenção.
- Esquemas em `src/schemas` devem ser utilizados para garantir consistência e validação dos dados ao longo do ciclo de vida da aplicação.