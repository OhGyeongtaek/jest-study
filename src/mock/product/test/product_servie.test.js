const ProductService = require("../product_servie");
const StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
  let service;

  beforeEach(() => {
    service = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await service.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "test", available: true }]);
  });
});
