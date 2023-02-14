// Import the Tag model from the models directory
const { Tag } = require('../models');

// Define an array of tag data that will be created
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Define a function to seed the tags into the database
const seedTagsToDB = async () => {
  try {
    // Use the bulkCreate method from the Tag model to insert multiple records at once
    await Tag.bulkCreate(tagData);
    console.log('Tags seeded successfully!');
  } catch (error) {
    console.error('Error seeding tags:', error);
  }
};

// Export the seedTagsToDB function so it can be used in other parts of the application
module.exports = seedTagsToDB;

// In summary, this code imports the Tag model from the models directory, defines an array of tag data that will be created, creates a function to seed this data into the database using the Tag model's bulkCreate method, and exports the function. The function logs a success message when the data is seeded and logs an error message if an error occurs.
