import type { Game } from "../domain/game";

export interface GameRepository {
  findByOwnerAndName(ownerId: string, normalizedName: string): Promise<Game | null>;
  save(ownerId: string, game: Game): Promise<void>;
}