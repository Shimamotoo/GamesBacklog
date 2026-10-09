import { describe, it, expect } from "vitest";
import { Game } from "./game";

describe("Game", () => {
  it("ADD-4: recusa nome vazio", () => {
    expect(() => Game.create({ name: "" })).toThrow();
  });
});