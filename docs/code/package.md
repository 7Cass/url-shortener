# package.json

O arquivo `package.json` é um arquivo fundamental em projetos Node.js, especificando as informações do projeto e gerenciando suas dependências e scripts executáveis. Abaixo está uma descrição detalhada de cada campo contido neste arquivo específico.

## Informações Básicas

- **name**: `"url-shortener"`
  - Nome do projeto. Neste caso, é um encurtador de URLs.
  
- **version**: `"1.0.0"`
  - Versão atual do projeto.

- **description**: `""`
  - Descrição do projeto. Atualmente está vazio.

- **main**: `"src/index.ts"`
  - O ponto de entrada principal do aplicativo.

## Scripts

Scripts definidos no projeto para auxiliar no desenvolvimento e execução:

- **build**: `"tsc"`
  - Compila o código TypeScript para JavaScript utilizando o comando `tsc`.

- **start**: `"npm run build && node dist/src/index.js"`
  - Compila o código e, em seguida, inicia a aplicação executando o arquivo compilado.

- **dev**: `"ts-node-dev --respawn --transpile-only src/index.ts"`
  - Inicia a aplicação em modo de desenvolvimento, com suporte a transpilações dinâmicas e reinicializando automaticamente a cada mudança de código.

## Palavras-chave

- **keywords**: `[]`
  - Lista de palavras-chave que definem o projeto. Atualmente está vazio.

## Autor e Licença

- **author**: `""`
  - Nome do autor. Atualmente está vazio.

- **license**: `"ISC"`
  - Tipo de licença do projeto.

## Dependências de Desenvolvimento

Dependências que são necessárias apenas durante o desenvolvimento do software:

- **@types/express**: `"^4.17.21"`
  - Tipagens do TypeScript para o Express.js.

- **@types/node**: `"^20.14.12"`
  - Tipagens do TypeScript para o Node.js.

- **drizzle-kit**: `"^0.23.0"`
  - Ferramenta de migração e gestão de esquemas para o banco de dados Drizzle.

- **ts-node-dev**: `"^2.0.0"`
  - Ferramenta que combina `ts-node` com funcionalidades de reinicialização automática.

- **typescript**: `"^5.5.4"`
  - Compilador TypeScript.

## Dependências

Dependências essenciais ao funcionamento do software em produção:

- **docgen**: `"file:../docgen"`
  - Dependência local para geração de documentação.

- **dotenv**: `"^16.4.5"`
  - Carrega variáveis de ambiente a partir de um arquivo `.env`.

- **drizzle-orm**: `"^0.32.1"`
  - ORM para interações com bases de dados.

- **express**: `"^4.19.2"`
  - Framework web para Node.js.

- **express-rate-limit**: `"^7.4.0"`
  - Middleware para limitar requisições a endpoints da API.

- **helmet**: `"^7.1.0"`
  - Middleware de segurança que ajuda a proteger aplicações Express.

- **postgres**: `"^3.4.4"`
  - Cliente PostgreSQL para Node.js.

---

Este arquivo gerencia as configurações principais e dependências do projeto, assegurando que todos os módulos necessários estejam disponíveis tanto em desenvolvimento quanto em produção.