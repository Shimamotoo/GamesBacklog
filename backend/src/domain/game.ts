export type GameStatus =
  | "want_to_play"
  | "playing"
  | "completed"
  | "paused"
  | "dropped";

export class Game {
  readonly status: GameStatus;
  genre: string | null =  null;
  releaseDate: string | null = null;
  price: number | null = null;
  note: string | null = null;

  private constructor(status: GameStatus) {
    this.status = status;
  }

  static create(input: { name: string }): Game {
    if (input.name.trim() === "") {
      throw new Error("Nome é obrigatório");
    }


    return new Game("want_to_play");
  }
}