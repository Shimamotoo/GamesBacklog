import { describe, it, expect } from "vitest";
import { FakeGameRepository } from "./fake-game-repository";
import { GetGame } from "./get-game";
import { AddGame } from "./add-game";

describe("GetGame", () => {
    it("GET-2: Jogo inexistente informa que não foi encontrado", async () => {
        const repository = new FakeGameRepository();
        const getGame = new GetGame(repository); 
        
        await expect(getGame.execute({ ownerId: "user-1", id: 999 })).rejects.toThrow("Jogo não encontrado");
    }); 
    
    it("GET-1: Jogo existente é devolvido com todos os seus dados", async () => {
        const repository = new FakeGameRepository();
        const addGame = new AddGame(repository);
        const getGame = new GetGame(repository);

        const created = await addGame.execute({ ownerId: "user-1", name: "Hades" });
        const found = await getGame.execute({ ownerId: "user-1", id: created.id! });

        expect(found.name).toBe("Hades");
        expect(found.status).toBe("want_to_play");
    });    
})