class UserClient {
  login(id, pw) {
    return fetch("http://test.com").then((res) => res.json());
  }
}

module.exports = UserClient;
