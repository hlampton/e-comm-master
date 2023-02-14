// Import the ProductTag model from the ../models folder
const { ProductTag } = require('../models');

// Define the product tag data as an array of objects
const productTagData = [
    {
        product_id: 1,
        tag_id: 6,
    },
    {
        product_id: 1,
        tag_id: 7,
    },
    {
        product_id: 1,
        tag_id: 8,
    },
    {
        product_id: 2,
        tag_id: 6,
    },
    {
        product_id: 3,
        tag_id: 1,
    },
    {
        product_id: 3,
        tag_id: 3,
    },
    {
        product_id: 3,
        tag_id: 4,
    },
    {
        product_id: 3,
        tag_id: 5,
    },
    {
        product_id: 4,
        tag_id: 1,
    },
    {
        product_id: 4,
        tag_id: 2,
    },
    {
        product_id: 4,
        tag_id: 8,
    },
    {
        product_id: 5,
        tag_id: 3,
    },
];

// Define a function that uses the bulkCreate method of the ProductTag model
// to insert all the product tag data into the database in a single query
const seedProductTags = () => {
    // Use the bulkCreate method of the ProductTag model to insert all the
    // product tag data into the database in a single query
    return ProductTag.bulkCreate(productTagData);
};

// Export the seedProductTags function as a module
module.exports = seedProductTags;
