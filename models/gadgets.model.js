const { DataTypes } = require("sequelize");
const sequelize = require("../connection/dbConnection"); // Import the database connection

// Define the Gadget model
const Gadget = sequelize.define(
  "Gadget",
  {
    image_url: {
      type: DataTypes.STRING, // String type for URL
      allowNull: false, // Non-nullable field
    },
    item_name: {
      type: DataTypes.STRING, // String type for item name
      allowNull: false,
    },
    item_secret: {
      type: DataTypes.STRING, // String type for secrets
      allowNull: false,
    },
    item_price: {
      type: DataTypes.FLOAT, // Float type for price
      allowNull: false,
      validate: {
        min: 0, // Optional: Ensure price is non-negative
      },
    },
    item_quantity: {
      type: DataTypes.INTEGER, // Integer type for quantity
      allowNull: false,
      validate: {
        min: 0, // Optional: Ensure quantity is non-negative
      },
    },
    item_description: {
      type: DataTypes.TEXT, // Text type for long descriptions
      allowNull: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = Gadget; // Export the Gadget model
