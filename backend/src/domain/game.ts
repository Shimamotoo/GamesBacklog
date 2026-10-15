export type GameStatus =
  | "want_to_play"
  | "playing"
  | "completed"
  | "paused"
  | "dropped";

export type CreateGameInput = {
  name: string;
  genre?: string;
  releaseDate?: string;
  priceInCents?: number;
  note?: string;
};

const MAX_NAME_LENGTH = 50;
const MAX_GENRE_LENGTH = 30;
const MAX_NOTE_LENGTH = 300;

function cleanOptionalText(value: string | undefined): string | null {
  const cleaned = value?.trim() ?? "";
  return cleaned === "" ? null : cleaned;
}

function isValidIsoDate(value: string): boolean {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return false;
  }
  return date.toISOString().slice(0, 10) === value;
}

export class Game {
  readonly name: string;
  readonly status: GameStatus;
  genre: string | null = null;
  releaseDate: string | null = null;
  priceInCents: number | null = null;
  note: string | null = null;

  private constructor(name: string, status: GameStatus) {
    this.name = name;
    this.status = status;
  }

  static create(input: CreateGameInput): Game {
    const name = input.name.trim();
    if (name === "") {
      throw new Error("Nome é obrigatório");
    }
    if (name.length > MAX_NAME_LENGTH) {
      throw new Error(`Nome não pode ter mais de ${MAX_NAME_LENGTH} caracteres`);
    }

    const genre = cleanOptionalText(input.genre);
    if (genre !== null && genre.length > MAX_GENRE_LENGTH) {
      throw new Error(`Gênero não pode ter mais de ${MAX_GENRE_LENGTH} caracteres`);
    }

    const note = cleanOptionalText(input.note);
    if (note !== null && note.length > MAX_NOTE_LENGTH) {
      throw new Error(`Observação não pode ter mais de ${MAX_NOTE_LENGTH} caracteres`);
    }

    const priceInCents = input.priceInCents ?? null;
    if (priceInCents !== null && priceInCents < 0) {
      throw new Error("Valor não pode ser negativo");
    }
    
    if (priceInCents !== null && !Number.isInteger(priceInCents)) {
      throw new Error("Valor não pode ter frações de centavo");
    }

    const releaseDate = input.releaseDate ?? null;
    if (releaseDate !== null && !isValidIsoDate(releaseDate)) {
      throw new Error("Data de lançamento inválida");
    }    

    const game = new Game(name, "want_to_play");
    game.genre = genre;
    game.releaseDate = releaseDate;
    game.priceInCents = priceInCents;
    game.note = note;
    return game;
  }
}