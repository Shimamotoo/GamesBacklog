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
  CONSTRAINT games_note_length
    CHECK (note IS NULL OR char_length(note) <= 300),
  CONSTRAINT games_price_valid
    CHECK (price IS NULL OR price >= 0),
  CONSTRAINT games_status_valid
    CHECK (status IN ('want_to_play','playing','completed','paused','dropped'))
  CONSTRAINT games_genre_length
    CHECK (genre IS NULL OR char_length(genre) <= 30),    
);

-- Duplicidade (ADD-6): mesmo dono + mesmo nome ignorando maiúsculas
CREATE UNIQUE INDEX games_owner_name_unique
  ON games (owner_id, lower(name));

-- Listagem (LST-4): jogos do dono, mais recentes primeiro
CREATE INDEX games_owner_recent_idx
  ON games (owner_id, created_at DESC, id DESC);