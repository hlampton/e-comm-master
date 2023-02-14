// Importing the express router
const expressRouter = require('express').Router();

// Importing route modules for categories, products, and tags
const categoriesRoutes = require('./category-routes');
const productsRoutes = require('./product-routes');
const tagsRoutes = require('./tag-routes');

// Mounting the category, product, and tag routes as subroutes of the main router
expressRouter.use('/categories', categoriesRoutes);
expressRouter.use('/products', productsRoutes);
expressRouter.use('/tags', tagsRoutes);

// Exporting the router as a module
module.exports = expressRouter;