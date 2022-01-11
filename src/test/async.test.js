const fetch = require("../async");

describe("Acync", () => {
  // done을 사용하지 않는 이유
  // done으로 할 경우 5초정도의 딜레이가 있음
  // 코드가 더러움
  describe("done", () => {
    it("then", (done) => {
      fetch().then((data) => {
        expect(data).toEqual({ item: "Milk", price: 200 });
        done();
      });
    });

    it("catch", (done) => {
      fetch("error").catch((reject) => {
        expect(reject).toBe("network error");
        done();
      });
    });
  });

  describe("return", () => {
    it("rejects", () => {
      return expect(fetch("error")).rejects.toBe("network error");
    });

    it("resolves", () => {
      return expect(fetch()).resolves.toEqual({ item: "Milk", price: 200 });
    });
  });

  describe("asycn/await", () => {
    it("rejects", async () => {
      await expect(fetch("error")).rejects.toBe("network error");
    });

    it("resolves", async () => {
      await expect(fetch()).resolves.toEqual({ item: "Milk", price: 200 });
    });
  });
});
