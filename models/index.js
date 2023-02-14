const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define the relationship between Product and Category
// A Product belongs to a Category
Product.belongsTo(Category, {
  // The foreign key in the Product model is "categoryId"
  foreignKey: 'categoryId',
});

// A Category has many Products
Category.hasMany(Product, {
  // The foreign key in the Product model is "categoryId"
  foreignKey: 'categoryId',
});

// Define the relationship between Product and Tag (many-to-many relationship)
// A Product belongs to many Tags (through the ProductTag model)
Product.belongsToMany(Tag, {
  // The intermediate model is ProductTag
  through: ProductTag,
  // The foreign key in the ProductTag model for the Product is "productId"
  foreignKey: 'productId',
});

// A Tag belongs to many Products (through the ProductTag model)
Tag.belongsToMany(Product, {
  // The intermediate model is ProductTag
  through: ProductTag,
  // The foreign key in the ProductTag model for the Tag is "tagId"
  foreignKey: 'tagId',
});

// Export the models and their relationships
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
