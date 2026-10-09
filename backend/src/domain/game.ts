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
    if (input.name.trim() === "") {
      throw new Error("Nome é obrigatório");
    }

    const game = new Game(input.name, "want_to_play");
    game.genre = input.genre ?? null;
    game.releaseDate = input.releaseDate ?? null;
    game.priceInCents = input.priceInCents ?? null;
    game.note = input.note ?? null;
    return game;
  }
}