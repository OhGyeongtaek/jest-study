const ProductService = require("../product_servie_no_di");
const ProductClient = require("../product_client");

jest.mock("../product_client");

describe("check fetchAvailableItems", () => {
  const fetchItems = jest.fn(async () => [
    { item: "test", available: true },
    { item: "fdafs", available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let service;

  beforeEach(() => {
    service = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await service.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "test", available: true }]);
  });

  it("should filter out only available items", async () => {
    await service.fetchAvailableItems();

    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
