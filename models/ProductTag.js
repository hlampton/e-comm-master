const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the ProductTag model
class ProductTag extends Model {}

// Initialize the fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define the id column
    id: {
      type: DataTypes.INTEGER,
      // The id column cannot be null
      allowNull: false,
      // The id column is the primary key
      primaryKey: true,
      // The id column is auto-incremented
      autoIncrement: true
    },
    // Define the product_id column
    product_id: {
      type: DataTypes.INTEGER,
      // The product_id column references the "id" column in the "product" table
      references: {
        model: "product",
        key: "id"
      }
    },
    // Define the tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      // The tag_id column references the "id" column in the "tag" table
      references: {
        model: "tag",
        key: "id"
      }
    }
  },
  {
    sequelize,
    // Do not add timestamps columns to the table
    timestamps: false,
    // Use the exact name for the table
    freezeTableName: true,
    // Use snakecase for column names
    underscored: true,
    // Use "product_tag" as the name for the model
    modelName: 'product_tag'
  }
);

// Export the ProductTag model
module.exports = ProductTag;
