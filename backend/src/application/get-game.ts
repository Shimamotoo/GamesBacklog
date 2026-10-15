import type { GameRepository } from "./game-repository";
import type { Game } from "../domain/game";

export class GetGame {
  constructor(private readonly repository: GameRepository) {}

  async execute(input: { ownerId: string; id: number }): Promise<Game> {
    const game = await this.repository.findById(input.ownerId, input.id);
    if (game === null) {
      throw new Error("Jogo não encontrado");
    }
    return game;
  }
}