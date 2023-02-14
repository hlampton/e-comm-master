// Load the environment variables from the .env file
require('dotenv').config();

// Import the Sequelize library
const Sequelize = require('sequelize');

// Check if the JAWSDB_URL environment variable is set
// If it is set, use it to create a new instance of Sequelize
// If it is not set, create a new instance of Sequelize using the local MySQL database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      // The host of the MySQL database
      host: 'localhost',
      // The dialect of the database (in this case, MySQL)
      dialect: 'mysql',
      // Options for the dialect
      dialectOptions: {
        // Set decimal numbers to true
        decimalNumbers: true,
      },
    });

// Export the sequelize instance for use in other files
module.exports = sequelize;
