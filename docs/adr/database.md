# ADR-DATABASE: Usar PostgreSQL como banco de dados

## Contexto
A V1 do Game Backlog precisa persistir jogos e o backlog do usuário em um
banco relacional. O backend será escrito em TypeScript (Node). Usuário
único na V1, mas o projeto deve poder evoluir para multiusuário e para
hospedagem pública sem trocar de banco.

## Decisão
Usar PostgreSQL.

## Alternativas consideradas
- **SQL Server:** funcional para o nosso caso, mas melhor integrado ao
  ecossistema .NET, com licenciamento por edição e hospedagem mais restrita.
- **PostgreSQL:** mais simples para a V1, mas limita a evolução para
  multiusuário e hospedagem pública.

## Consequências
- (+) Open source, sem custo de licença, amplo suporte de hospedagem e de
  bibliotecas em Node/TypeScript.
- (+) Recursos úteis para evoluções futuras (ex.: arrays e JSONB para tags).
- (−) Por padrão diferencia maiúsculas de minúsculas: a regra de jogo
  duplicado precisa ser tratada explicitamente (vira critério de aceitação).
- (−) Exige subir um servidor de banco no ambiente de desenvolvimento.