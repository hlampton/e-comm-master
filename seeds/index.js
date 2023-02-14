// Importing seed data functions for categories, products, tags, and product tags
const seedCategoryData = require('./category-seeds');
const seedProductData = require('./product-seeds');
const seedTagData = require('./tag-seeds');
const seedProductTagData = require('./product-tag-seeds');

// Importing sequelize connection from the config folder
const sequelize = require('../config/connection');

// Function to seed all data
const seedAllData = async () => {
try {
// Syncing the database, with the option to force sync and drop any existing data
await sequelize.sync({ force: true });
console.log('\n----- DATABASE SYNCED -----\n');    // Seeding category data
await seedCategoryData();
console.log('\n----- CATEGORIES SEEDED -----\n');

// Seeding product data
await seedProductData();
console.log('\n----- PRODUCTS SEEDED -----\n');

// Seeding tag data
await seedTagData();
console.log('\n----- TAGS SEEDED -----\n');

// Seeding product tag data
await seedProductTagData();
console.log('\n----- PRODUCT TAGS SEEDED -----\n');
} catch (error) {
console.log(error);
}

// Exiting the process
process.exit(0);
};
// Calling the seedAllData function to start the seeding process
seedAllData();

// In summary, this code imports four separate functions to seed the database with data for categories, products, tags, and product tags, imports the sequelize connection from the config folder, defines a function that seeds all the data by calling the respective seed functions and exiting the process upon completion, and finally, calls the seedAllData function to start the seeding process. The code also includes a try-catch block to catch and log any errors that may occur during the seeding process.