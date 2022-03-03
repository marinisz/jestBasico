const Calculadora = require('../../src/Calculadora')
const calculadora = new Calculadora();

describe('Calculadora', () => {
    it("deve retornar a soma de 1 + 2 = 3", async () => {
        expect(calculadora.soma(1,2)).toBe(3);
    });
    it("deve retornar a subracao de 2 - 2 = 0", async () => {
      expect(calculadora.subtracao(2,2)).toBe(0);
    });
    it("deve retornar a divisao de 2 / 2 = 1", async () => {
      expect(calculadora.divisao(2,2)).toBe(1);
    });
    it("deve retornar a multiplicacao de 2 * 2 = a", async () => {
      expect(calculadora.multpicacao(2,2)).toBe(4);
    });
});
