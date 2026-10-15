import { describe, it, expect } from "vitest";
import { FakeGameRepository } from "./fake-game-repository";
import { GetGame } from "./get-game";

describe("GetGame", () => {
    it("GET-2: jogo inexistente informa que não foi encontrado", async () => {
    const repository = new FakeGameRepository();
    const getGame = new GetGame(repository); 
    
    await expect(getGame.execute({ ownerId: "user-1", id: 999 })).rejects.toThrow("não encontrado");
    });      
})