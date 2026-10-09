export class Game {
  static create(input: { name: string }): Game {
    if (input.name.trim() === "") {
      throw new Error("Nome é obrigatório");
    }
    return new Game();
  }
}