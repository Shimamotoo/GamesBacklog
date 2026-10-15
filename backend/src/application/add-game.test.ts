import { describe, it, expect } from "vitest";
import { AddGame } from "./add-game";
import { FakeGameRepository } from "./fake-game-repository";

describe("AddGame", () => {
  it("ADD-6: Nome igual a um já existente é recusado", async () => {
    const repository = new FakeGameRepository();
    const addGame = new AddGame(repository);

    await addGame.execute({ ownerId: "user-1", name: "Hades" });

    await expect(
      addGame.execute({ ownerId: "user-1", name: "  hades  " })
    ).rejects.toThrow("já existe");
  });
});