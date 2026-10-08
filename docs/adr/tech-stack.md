# ADR-0004: Stack: TypeScript, Fastify, Kysely e Vitest

## Contexto
Backend em TypeScript (Node) com interface mínima em React. O projeto quer
manter contato com SQL e praticar design, então as ferramentas não devem
esconder as decisões.

## Decisão
- **Servidor HTTP:** Fastify.
- **Acesso ao banco:** construtor de consultas, com Kysely como escolha
  (a confirmar ao instalar).
- **Testes:** Vitest.

## Alternativas consideradas
- **Express:** mais conhecido e com mais material, mas com TypeScript
  "colado" depois. Já o conheço e quero aprender o Fastify.
- **NestJS:** impõe a própria arquitetura (ver ADR-0002).
- **ORM:** mais rápido, mas esconde o SQL.
- **SQL escrito à mão:** controle total, mais trabalho e mais risco de erro.
- **Jest ou o test runner nativo do Node:** Jest tem mais material de
  estudo, mas pede configuração extra para TypeScript.

## Consequências
- (+) Tipagem de ponta a ponta, do banco ao domínio.
- (+) Aprendizado de uma ferramenta nova (Fastify).
- (−) Menos tutoriais que o Express.
- (−) Escrever consultas manualmente dá mais trabalho que um ORM.