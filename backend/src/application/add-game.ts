import { Game } from "../domain/game";
import type { GameRepository } from "./game-repository";

export class AddGame {
  constructor(private readonly repository: GameRepository) {}

  async execute(input: { ownerId: string; name: string }): Promise<Game> {
    const normalizedName = input.name.trim().toLowerCase();
    const existing = await this.repository.findByOwnerAndName(input.ownerId, normalizedName);
    if (existing !== null) {
      throw new Error("Esse jogo já existe na sua lista");
    }

    const game = Game.create({ name: input.name });
    await this.repository.save(input.ownerId, game);
    return game;
  }
}