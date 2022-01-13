const UserClient = require("../user_client");
const UserService = require("../user_service");

jest.mock("../user_client");

describe("UserService", () => {
  const login = jest.fn(async () => ({}));

  UserClient.mockImplementation(() => ({ login }));

  let service;

  beforeEach(() => {
    service = new UserService(new UserClient());
  });

  it("is login OK?", async () => {
    await service.login("", "");

    expect(service.isLogedIn).toBe(true);

    expect(login).toHaveBeenCalledTimes(1);

    await service.login("", "");
    expect(login).toHaveBeenCalledTimes(1);
  });
});
