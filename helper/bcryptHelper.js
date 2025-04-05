const bcrypt = require("bcrypt");

module.exports = {
  async hashData(data, size) {
    const encryptedData = await bcrypt.hash(data, size);
    return encryptedData;
  },
  async validateData(data, hashData) {
    const validated = await bcrypt.compare(data, hashData);
    return validated;
  },
};
