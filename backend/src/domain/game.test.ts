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

});