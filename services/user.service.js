const { User } = require("../models");

module.exports = {
  async createUser(data) {
    try {
      const newUser = await User.create(data);
      return newUser.toJSON();
    } catch (error) {
      throw Error(error);
    }
  },
  getUser() {},
};
