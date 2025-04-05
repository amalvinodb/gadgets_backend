const jwtHelper = require("../helper/jwtHelper");

module.exports = {
  verifyUser(req, res, next) {
    const autherisation = req.headers["authorization"] || " ";
    const [barer, token] = autherisation.split(" ");
    const validatedData = jwtHelper.verifyToken(token);
    console.log(validatedData);
    if (!validatedData.status) {
      res.status(403).json({ message: "Invalid user auth token" });
    }
    req.user = validatedData.data;
    next();
  },
};
