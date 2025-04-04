"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gadget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gadget.init(
    {
      image_url: DataTypes.STRING,
      item_name: DataTypes.STRING,
      item_secret: DataTypes.STRING,
      item_price: DataTypes.FLOAT,
      item_quantity: DataTypes.INTEGER,
      item_description: DataTypes.TEXT,
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users", // Name of the referenced table
          key: "id", // Key in the Users table
        },
      },
    },
    {
      sequelize,
      modelName: "Gadget",
    }
  );
  return Gadget;
};
