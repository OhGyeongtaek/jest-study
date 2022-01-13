class StubProductClient {
  async fetchItems() {
    return [
      { item: "test", available: true },
      { item: "fdafs", available: false },
    ];
  }
}

module.exports = StubProductClient;
