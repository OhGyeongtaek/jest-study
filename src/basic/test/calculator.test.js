const Calculator = require("../calculator");

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it("Calculator init 0", () => {
    expect(calc.value).toBe(0);
  });

  it("sets", () => {
    calc.set(9);
    expect(calc.value).toBe(9);
  });

  describe("add", () => {
    it("Calculator add", () => {
      calc.add(3);
      expect(calc.value).toBe(3);
    });

    it("Calculator value over 100", () => {
      expect(() => {
        calc.add(101);
      }).toThrow("100이 넘어갈 수 없습니다.");
    });
  });

  it("Calculator clear", () => {
    calc.set(3);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it("Calculator subtract 10", () => {
    calc.subtract(10);
    expect(calc.value).toBe(-10);
  });

  it("Calculator multiply 10", () => {
    calc.set(1);
    calc.multiply(10);
    expect(calc.value).toBe(10);
  });

  describe("divide", () => {
    it("0 / 0 === NaN", () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });
  });
});
