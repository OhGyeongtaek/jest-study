class UserService {
  constructor(api) {
    this.api = api;
    this.isLogedIn = false;
  }

  login(id, pw) {
    if (!this.isLogedIn) {
      this.api.login(id, pw).then(() => {
        this.isLogedIn = true;
      });
    }
  }
}

module.exports = UserService;
