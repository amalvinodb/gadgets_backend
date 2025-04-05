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
  async getUser(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user.toJSON();
    } catch (error) {
      throw Error(error);
    }
  },
};
