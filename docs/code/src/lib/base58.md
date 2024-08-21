# `base58.ts`

Este arquivo contém funções para gerar URLs curtas usando um algoritmo de hash simples e codificação Base58. O objetivo principal é transformar uma URL dada em uma versão curta, que é mais fácil de compartilhar e utilizar. A função principal exportada é `generateShortUrl`.

## Constantes

- **`ALPHABET`**: Define o conjunto de caracteres usado na codificação Base58. Exclui caracteres que podem ser facilmente confundidos, como '0', 'O', 'I' e 'l'.
- **`BASE`**: O tamanho do alfabeto Base58, calculado dinamicamente.

## Funções

### `simpleHash(url: string): number`

Esta função gera um hash simples a partir de uma string de URL.

- **Parâmetros**
  - `url`: A URL para a qual será gerado o hash.

- **Retorno**
  - `number`: Um hash assinado de 32 bits convertido para positivo.

### `toBase58(hash: number): string`

Esta função codifica um número inteiro em uma string Base58.

- **Parâmetros**
  - `hash`: O número a ser codificado.

- **Retorno**
  - `string`: A representação Base58 do número.

### `getRandomBase58Char(): string`

Esta função gera um caractere aleatório do alfabeto Base58.

- **Retorno**
  - `string`: Um caractere aleatório.

### `generateShortUrl(url: string): string`

Esta é a função principal que gera uma URL curta a partir de uma dada URL.

- **Parâmetros**
  - `url`: A URL a ser encurtada.

- **Retorno**
  - `string`: A URL curta, que terá entre 3 e 7 caracteres.

## Fluxo de Trabalho da Função `generateShortUrl`

1. **Gerar Hash**: A função começa gerando um hash simples da URL fornecida utilizando `simpleHash`.
2. **Codificar em Base58**: O hash é então codificado em uma string Base58 usando `toBase58`.
3. **Ajustar Comprimento**: 
    - A função garante que a URL curta tenha pelo menos 3 caracteres, preenchendo-a com caracteres aleatórios do alfabeto Base58, se necessário.
    - Se a URL curta ultrapassar 7 caracteres, ela será truncada para exatamente 7 caracteres.

## Exemplo de Uso

```typescript
import { generateShortUrl } from "./base58";

const originalUrl = "https://example.com";
const shortUrl = generateShortUrl(originalUrl);

console.log(shortUrl);  // Exemplo de saída: "jN2kL3A"
```

Esta implementação é útil para aplicações que necessitam de URLs curtas e únicas para melhor compartilhamento e memorização.