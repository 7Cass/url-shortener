# Documentação da Estrutura de Pastas

## drizzle

Esta pasta contém a configuração e os arquivos necessários para gerenciar a base de dados do projeto. Abaixo está a descrição detalhada dos arquivos e subpastas contidos na pasta `drizzle`.

### Estrutura da Pasta

- **0000_create_urls_table.sql**
  - **Descrição**: Este arquivo SQL é usado para criar a tabela `urls` no banco de dados. Ele contém as definições de esquema necessárias para armazenar os URLs que serão encurtados.
  - **Caminho**: `drizzle/0000_create_urls_table.sql`

- **meta**
  - **Descrição**: A pasta `meta` contém metadados e informações de instantâneo que ajudam a rastrear o estado e as mudanças na configuração do banco de dados.
  - **Caminho**: `drizzle/meta`
  
  - **0000_snapshot.json**
    - **Descrição**: Este arquivo JSON captura um instantâneo do estado atual do banco de dados após a execução do arquivo SQL de criação da tabela. Ele é usado para referência e verificação de integridade do banco.
    - **Caminho**: `drizzle/meta/0000_snapshot.json`
  
  - **_journal.json**
    - **Descrição**: Este arquivo JSON registra todas as migrações e alterações que foram aplicadas ao banco de dados ao longo do tempo, funcionando como um log de auditoria.
    - **Caminho**: `drizzle/meta/_journal.json`

## Exemplo de Estrutura

Abaixo, uma visualização da estrutura de pastas:

```
drizzle/
├── 0000_create_urls_table.sql
└── meta
    ├── 0000_snapshot.json
    └── _journal.json
```

## Notas Adicionais

- **Objetivo**: A pasta `drizzle` é crucial para a configuração e manutenção do banco de dados, garantindo que as tabelas e dados necessários estejam corretamente configurados e que todas as mudanças sejam devidamente rastreadas e documentadas.

- **Manutenção**: Adicione novos arquivos de migração SQL na mesma estrutura e atualize o `journal.json` conforme necessário para manter o rastreamento das mudanças.

Essa documentação deve servir como referência para entender a organização e propósito dos arquivos dentro da pasta `drizzle`. Para qualquer alteração ou adição, siga a estrutura e prática documentada para manter a coesão no projeto.