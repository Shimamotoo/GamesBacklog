# Game Backlog: Banco de dados e API da V1

## 1. Banco de dados (PostgreSQL)

```sql
CREATE TABLE users (
  id          uuid        PRIMARY KEY,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE games (
  id            bigint      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  owner_id      uuid        NOT NULL REFERENCES users(id),
  name          text        NOT NULL,
  genre         text,
  release_date  date,
  price         numeric(10,2),
  note          text,
  status        text        NOT NULL DEFAULT 'want_to_play',
  created_at    timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT games_name_valid
    CHECK (name = btrim(name) AND char_length(name) BETWEEN 1 AND 50),
  CONSTRAINT games_genre_length
    CHECK (genre IS NULL OR char_length(genre) <= 30),
  CONSTRAINT games_note_length
    CHECK (note IS NULL OR char_length(note) <= 300),
  CONSTRAINT games_price_valid
    CHECK (price IS NULL OR price >= 0),
  CONSTRAINT games_status_valid
    CHECK (status IN ('want_to_play','playing','completed','paused','dropped'))
);

CREATE UNIQUE INDEX games_owner_name_unique ON games (owner_id, lower(name));
CREATE INDEX games_owner_recent_idx ON games (owner_id, created_at DESC, id DESC);
```

Decisões: id sequencial para jogos e UUID para usuários; status como texto
com CHECK; preço em NUMERIC(10,2) (convertido de/para centavos no
repositório); a data de lançamento é tratada como texto "AAAA-MM-DD" no
código; o dono do jogo vem de um usuário fixo na V1 (não do pedido).

## 2. API (Fastify)

| Funcionalidade | Rota | Sucesso | Critérios |
|---|---|---|---|
| Adicionar | POST /games | 201 | ADD-1 a 15 |
| Listar | GET /games | 200 | LST-1 a 4 |
| Ver um | GET /games/{id} | 200 | GET-1, 2 |
| Editar | PATCH /games/{id} | 200 | EDT-1 a 10 |
| Alterar status | PUT /games/{id}/status | 200 | STS-1 a 6 |
| Remover | DELETE /games/{id} | 204 | DEL-1 a 3 |

### Formato de um jogo (resposta)
```json
{
  "id": 1,
  "name": "Hades",
  "genre": "Roguelike",
  "releaseDate": "2020-09-17",
  "price": "39.90",
  "note": "o João indicou",
  "status": "want_to_play",
  "createdAt": "2026-10-08T14:03:00.000Z"
}
```
Campos opcionais não informados voltam como `null`.

### Regras do corpo dos pedidos
- POST: `name` obrigatório; os demais opcionais.
- PATCH: só os campos enviados mudam; `null` (ou texto vazio em gênero e
  observação) remove um campo opcional; campo desconhecido ou não editável
  (status, id, dono, createdAt) é recusado; corpo vazio é recusado.
- PUT /status: `{ "status": "playing" }`.

### Erros
| Situação | Código | `error.code` |
|---|---|---|
| Dado inválido, campo proibido ou pedido vazio | 400 | VALIDATION_ERROR |
| Nome já existe na lista | 409 | GAME_ALREADY_EXISTS |
| Mudar para o status atual | 409 | STATUS_UNCHANGED |
| Jogo não existe | 404 | GAME_NOT_FOUND |

```json
{ "error": { "code": "GAME_ALREADY_EXISTS",
             "message": "Esse jogo já está na sua lista." } }
```
`code` é estável (para programas); `message` é em português (para pessoas).
Em VALIDATION_ERROR a resposta também indica o campo que falhou.

## 3. Pontos para o futuro multiusuário
- Toda consulta de jogo filtra por id **e** dono; jogo de outra pessoa
  responde "não encontrado" (404), não "sem permissão".
- O repositório já recebe o dono em todas as operações.