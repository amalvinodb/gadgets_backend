const { Sequelize } = require("sequelize");
require("colors");
const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "./dev.sqlite",
});

const connectDB = async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();

    console.log("Connected to DB".yellow.underline);
  } catch (error) {
    console.error(
      "========== Error Connecting to Database ==========".red.bold
    );
    console.error(error.message.red);
    console.error(error.stack.gray);
  }
};

module.exports = { sequelize, connectDB };
