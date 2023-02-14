// Import the Category model from the models directory
const { Category } = require('../models');

// Define an array of category data
const categoryData = [
  {
    name: 'Shirts',
  },
  {
    name: 'Shorts',
  },
  {
    name: 'Music',
  },
  {
    name: 'Hats',
  },
  {
    name: 'Shoes',
  },
];

// Define a function to seed the categories into the database
const seedCategoriesToDB = async () => {
  try {
    // Use the bulkCreate method from the Category model to insert all the category data into the database
    await Category.bulkCreate(categoryData);
    console.log('Category data seeded successfully!');
  } catch (error) {
    console.error('Error seeding category data:', error);
  }
};

// Export the seedCategoriesToDB function
module.exports = seedCategoriesToDB;

// In summary, this code imports the Category model from the models directory, defines an array of category data, creates a function to bulk insert this data into a database using the Category model's bulkCreate method, and exports the function. The function logs a success message when the data is seeded and logs an error message if an error occurs.
