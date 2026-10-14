# Game Backlog: Estrutura do projeto e ferramentas (V1)

## Stack
| Peça | Escolha | Motivo resumido |
|---|---|---|
| Linguagem | TypeScript (Node) | Tipagem ajuda a modelar o domínio |
| Servidor HTTP | Fastify | Bom suporte a TypeScript; vontade de aprender (já conheço Express) |
| Banco | PostgreSQL | Ver ADR-0001 |
| Acesso ao banco | Construtor de consultas (candidato: Kysely) | Manter contato com SQL, com tipagem |
| Testes | Vitest | Suporte nativo a TypeScript; sintaxe próxima ao Jest |
| Interface | React (mínima) | Exibir jogos e alterar status |

## Estrutura de pastas
game-backlog/
├── docs/
│   ├── 01-problema-e-sucesso.md
│   ├── 02-spec-v1.md
│   ├── 03-dominio.md
│   ├── 04-estrutura-e-ferramentas.md
│   └── adr/
├── backend/
│   └── src/
│       ├── domain/            (Game e suas regras; não conhece ninguém)
│       ├── application/       (casos de uso + contrato do repositório)
│       ├── infrastructure/    (Postgres, Kysely, migrações)
│       └── http/              (Fastify: rotas e tradução de erros)
└── frontend/                  (React)

## Regra de ouro
As dependências apontam para dentro: o domínio não conhece a aplicação,
o banco nem o HTTP. O contrato do repositório fica em `application`;
a implementação real fica em `infrastructure`.

## Estratégia de testes
| Tipo | Camada | Usa banco? |
|---|---|---|
| Regras do Game | domain | Não |
| Casos de uso | application | Não (repositório falso em memória) |
| Repositório real | infrastructure | Sim (Postgres de teste) |
| Rotas HTTP | http | Não |

## Convenções
- Código em inglês; documentação em português.
- Limites (50 e 300 caracteres) em constantes únicas.

## Decisões a registrar como ADR (Passo 6)
- Fastify, Vitest, construtor de consultas (Kysely), TDD no domínio,
  entidade única por usuário.