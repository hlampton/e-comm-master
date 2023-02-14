// Import the required packages and files
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Create a new express application
const app = express();

// Set the port for the application to listen on
const PORT = process.env.PORT || 3001;

// Configure middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the imported routes
app.use(routes);

// Sync sequelize models to the database and turn on the server
sequelize.sync({ force: false })
  .then(() => {
    // Start the express server on the specified port
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('An error occurred while connecting to the database: ', error);
  });

// In summary, this code creates an express application, imports required packages and files, configures middleware to parse JSON and URL-encoded data, uses the imported routes, syncs sequelize models to the database, and turns on the server by listening on the specified port. If an error occurs while syncing sequelize models, an error message is logged.
