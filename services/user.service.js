const { User } = require("../models");

module.exports = {
  async createUser(data) {
    try {
      const newUser = await User.create(data);
      return { status: true, user: newUser };
    } catch (error) {
      throw Error(error);
    }
  },
  async getUser(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) return { status: false, message: "unable to find users" };
      return { status: true, user: user };
    } catch (error) {
      throw Error(error);
    }
  },
};
