import { describe, it, expect } from "vitest";

import { Game } from "./game";

describe("Game", () => {

  it("ADD-4: recusa nome vazio", () => {
    expect(() => Game.create({ name: "" })).toThrow();
  });

  it("ADD-1: jogo criado com status want_to_play", () => {
    const game = Game.create({ name: "Hades" });
    expect(game.status).toBe("want_to_play");
  });

  it("ADD-2: jogo criado com campos opnionais null", () => {
    const game = Game.create({ name: "Hades" });
    expect(game.status).toBe("want_to_play");
    expect(game.genre).toBeNull();
    expect(game.releaseDate).toBeNull();
    expect(game.price).toBeNull();
    expect(game.note).toBeNull();
  });

});