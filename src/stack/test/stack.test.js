const Stack = require("../stack");

describe("Stack 테스트 케이스", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("stack 선언이 잘 되는지 확인", () => {
    expect(stack).toEqual(new Stack());
  });

  it("stack get test", () => {
    expect(stack.get()).toEqual([]);
  });

  it("stack push and pop test", () => {
    stack.push("1234");

    expect(stack.get()).toEqual(["1234"]);
    expect(stack.pop()).toEqual("1234");
    expect(stack.get()).toEqual([]);
  });
});
