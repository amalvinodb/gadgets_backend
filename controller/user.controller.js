const userService = require("../services/user.service");
const bcryptHelper = require("../helper/bcryptHelper");
const jwtHelper = require("../helper/jwtHelper");

module.exports = {
  async userSignUp(req, res) {
    try {
      const data = req.body;
      if (data.password && data.name && data.email) {
        const existUser = await userService.getUser(data.email);
        console.log(existUser.status);
        if (existUser.status)
          res.status(403).json({ message: "User email already exist" });
        data.password = await bcryptHelper.hashData(data.password, 10);

        const newUser = await userService.createUser(data);
        res.status(200).json({ message: "created new user entry" });
      } else {
        res
          .status(403)
          .json({ message: "Missing filed please add all required fields" });
      }
    } catch (error) {
      throw Error(error);
    }
  },
  async doLogin(req, res) {
    try {
      console.log(req.body, "this is a body");
      const data = req.body;
      const user = await userService.getUser(data.email);
      if (!user) res.status(403).json({ message: "user not found" });
      const userAuth = await bcryptHelper.validateData(
        data.password,
        user.user.password
      );
      if (userAuth) {
        const data = {
          id: user.user.id,
          name: user.user.name,
          email: user.user.email,
          age: user.user.age,
        };
        console.log(data);
        const jwtToken = jwtHelper.generateToken(data);
        res
          .status(200)
          .json({ message: "user Logged in succesfully", token: jwtToken });
      } else {
        res.status(403).json({ message: "Wrong User Details" });
      }
    } catch (error) {
      throw Error(error);
    }
  },
};
