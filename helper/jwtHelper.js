const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");
module.exports = {
  generateToken(data) {
    const jwtToken = jwt.sign(data, JWT_SECRET, { expiresIn: "3d" });
    return jwtToken;
  },
  verifyToken(toekn) {
    try {
      const data = jwt.verify(toekn, JWT_SECRET);
      return { status: true, data };
    } catch (error) {
      return { status: false, message: "invalid token" };
    }
  },
};
