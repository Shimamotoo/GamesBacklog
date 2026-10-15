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

  it("ADD-13: Observação com mais de 300 caracteres é recusada", () => {
    expect(() => Game.create({ name: "Hades", note: "A".repeat(301) })).toThrow();
  });

  it("ADD-13(II): Observação só com espaços vira não informada", () => {
    const game = Game.create({ name: "Hades", note: "      " });
    expect(game.note).toBeNull();
  });

  it("ADD-14: Gênero com mais de 30 caracteres é recusado", () => {
    expect(() => Game.create({ name: "Hades", genre: "A".repeat(31) })).toThrow();
  });

  it("ADD-14(II): Gênero com espaços nas pontas é salvo sem eles", () => {
    const game = Game.create({ name: "Hades", genre: "  Terror  " });
    expect(game.genre).toBe("Terror");
  });

  it("ADD-10: Valor negativo é recusado", () => {
    expect(() => Game.create({ name: "Hades", priceInCents: -1 })).toThrow();
  });

  it("ADD-9: Valor zero é aceito como gratuito", () => {
    const game = Game.create({ name: "Hades", priceInCents: 0 });
    expect(game.priceInCents).toBe(0);
  });  

  it("ADD-11: Valor com mais de duas casas decimais é recusado", () => {
    expect(() => Game.create({ name: "Hades", priceInCents: 1.5 })).toThrow();
  }); 

  it("ADD-11(II): Valor inteiro de centavos é aceito", () => {
    const game = Game.create({ name: "Hades", priceInCents: 3999 });
    expect(game.priceInCents).toBe(3999);
  }); 

  it("ADD-15: Data de lançamento inválida é recusada", () => {
    expect(() => Game.create({ name: "Hades", releaseDate: "2027-02-31" })).toThrow();
  });  

});