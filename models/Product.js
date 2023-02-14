// Import important parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the database connection from config.js
const sequelize = require('../config/connection');

// Initialize the Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for the Product model
Product.init(
    {
        // Define an id column
        id: {
            // The id field will have INTEGER data type
            type: DataTypes.INTEGER,
            // The id field cannot be null
            allowNull: false,
            // The id field is the primary key
            primaryKey: true,
            // The id field is auto-incremented
            autoIncrement: true
        },
        // Define the product_name column
        product_name: {
            // The product_name field will have STRING data type
            type: DataTypes.STRING,
            // The product_name field cannot be null
            allowNull: false
        },
        // Define the price column
        price: {
            // The price field will have DECIMAL data type with 2 decimal places
            type: DataTypes.DECIMAL(10, 2),
            // The price field cannot be null
            allowNull: false,
            // The price field must be a decimal with 2 decimal places
            validate: {
                isDecimal: true
            }
        },
        // Define the stock column
        stock: {
            // The stock field will have INTEGER data type
            type: DataTypes.INTEGER,
            // The stock field cannot be null
            allowNull: false,
            // The default value for the stock field is 10
            defaultValue: 10,
            // The stock field must be a number
            validate: {
                isNumeric: true
            }
        },
        // Define the category_id column
        category_id: {
            // The category_id field will have INTEGER data type
            type: DataTypes.INTEGER,
            // The category_id field references the "id" field in the "category" table
            references: {
                model: "category",
                key: "id"
            }
        }
    },
    {
        // Pass the sequelize connection instance to the model
        sequelize,
        // Do not add timestamps fields to the table
        timestamps: false,
        // Use the exact name for the table
        freezeTableName: true,
        // Use snakecase for column names
        underscored: true,
        // Use "product" as the name for the model
        modelName: 'product'
    }
);

// Export the Product model
module.exports = Product;
