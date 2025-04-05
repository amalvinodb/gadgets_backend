const userService = require("../services/user.service");

module.exports = {
  async userSignUp(req, res) {
    try {
      const data = req.body;
      if (data.password && data.name && data.email && data.age) {
        const newUser = await userService.createUser(data);
        res
          .status(200)
          .json({ message: "created new user entry", User: newUser });
      } else {
        res
          .status(403)
          .json({ message: "Missing filed please add all required fields" });
      }
    } catch (error) {
      res.status(403).json({ message: "Encounted an issue creating User" });
    }
  },
  async doLogin(req, res) {
    try {
      const data = req.body;
      const user = await userService.getUser(data.email);
      console.log(user);
    } catch (error) {
      res.status(403).json({ message: "Encounted an issue verifying User" });
    }
  },
};
