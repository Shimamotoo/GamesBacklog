import type { Game } from "../domain/game";
import type { GameRepository } from "./game-repository";

export class FakeGameRepository implements GameRepository {
  private games: { ownerId: string; game: Game }[] = [];

  async findByOwnerAndName(ownerId: string, normalizedName: string): Promise<Game | null> {
    const found = this.games.find(
      (entry) => entry.ownerId === ownerId && entry.game.name.toLowerCase() === normalizedName
    );
    return found?.game ?? null;
  }

  async save(ownerId: string, game: Game): Promise<void> {
    this.games.push({ ownerId, game });
  }

  async findById(ownerId: string, id: number): Promise<Game | null> {
    const found = this.games.find(
      (entry) => entry.ownerId === ownerId && entry.game.id === id
    );
    return found?.game ?? null;
  }
}