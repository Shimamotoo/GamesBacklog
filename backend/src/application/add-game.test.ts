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

    it("ADD-7: 'Hades' e 'Hades II' são jogos diferentes e podem coexistir", async () => {
        const repository = new FakeGameRepository();
        const addGame = new AddGame(repository);

        const first = await addGame.execute({ ownerId: "user-1", name: "Hades" });
        const second = await addGame.execute({ ownerId: "user-1", name: "Hades II" });

        expect(first.name).toBe("Hades");
        expect(second.name).toBe("Hades II");
    });  
});