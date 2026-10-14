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

  it("ADD-2: jogo criado com campos opcionais null", () => {
    const game = Game.create({ name: "Hades" });
    expect(game.status).toBe("want_to_play");
    expect(game.genre).toBeNull();
    expect(game.releaseDate).toBeNull();
    expect(game.priceInCents).toBeNull();
    expect(game.note).toBeNull();
  });

  it("ADD-3: salva nome, data de lançamento, gênero, valor e observação", () => {
    const game = Game.create({
      name: "Hades",
      genre: "RPG",
      releaseDate: "2027-04-15",
      priceInCents: 3990,
      note: "Texto",
    });

    expect(game.name).toBe("Hades");
    expect(game.genre).toBe("RPG");
    expect(game.releaseDate).toBe("2027-04-15");
    expect(game.priceInCents).toBe(3990);
    expect(game.note).toBe("Texto");
  });

  it("ADD-5: Espaços antes e depois do nome são removidos", () => {
    const game = Game.create({ name: "  Hades  " });
    expect(game.name).toBe("Hades");
  });

  it("ADD-12: Nomes com mais de 50 caracteres são recusados", () => {
    expect(() => Game.create({ name: "A".repeat(51) })).toThrow();
  });

  it("ADD-12(II): Nomes com até 50 caracteres são permitidos", () => {
    const game = Game.create({ name: "A".repeat(50) });
    expect(game.name.length).toBe(50);
  });

  it("ADD-12(III): Espaços nas pontas não contam para o limite", () => {
    const game = Game.create({ name: "  " + "A".repeat(50) + "  " });
    expect(game.name.length).toBe(50);
  });  

});