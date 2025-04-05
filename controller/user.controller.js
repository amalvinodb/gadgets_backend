const userService = require("../services/user.service");
const bcryptHelper = require("../helper/bcryptHelper");
const jwtHelper = require("../helper/jwtHelper");

module.exports = {
  async userSignUp(req, res) {
    try {
      const data = req.body;
      if (data.password && data.name && data.email && data.age) {
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
      console.error(error);
      res.status(403).json({ message: "Encounted an issue creating User" });
    }
  },
  async doLogin(req, res) {
    try {
      const data = req.body;
      const user = await userService.getUser(data.email);
      const userAuth = await bcryptHelper.validateData(
        data.password,
        user.user.password
      );
      if (userAuth) {
        const data = {
          name: user.user.name,
          email: user.user.email,
          age: user.user.age,
        };
        const jwtToken = jwtHelper.generateToken(data);
        res
          .status(200)
          .json({ message: "user Logged in succesfully", token: jwtToken });
      } else {
        res.status(403).json({ message: "Wrong User Details" });
      }
    } catch (error) {
      console.error(error);
      res.status(403).json({ message: "Encounted an issue verifying User" });
    }
  },
};
