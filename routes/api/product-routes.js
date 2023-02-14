const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Define the endpoint for the products API

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      // Specify the attributes to be included in the response
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name']
        },
        {
          model: Tag,
          attributes: ['id', 'tag_name']
        }
      ]
    });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      },
      // Specify the attributes to be included in the response
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name']
        },
        {
          model: Tag,
          attributes: ['id', 'tag_name']
        }
      ]
    });
    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tag_ids) {
      const productTagIdArr = req.body.tag_ids.map((tag_id) => {
        return { product_id: product.id, tag_id };
      });
      await ProductTag.bulkCreate(productTagIdArr);
      const updatedProduct = await Product.findByPk(product.id, {
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        include: [
          {
            model: Category,
            attributes: ['id', 'category_name']
          },
          {
            model: Tag,
            attributes: ['id', 'tag_name'],
            through: ProductTag
          }
        ]
      });
      res.status(200).json(updatedProduct);
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// update a product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.update(req.body, { where: { id: req.params.id } });
    const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
    const productTagIds = productTags.map(({ tag_id }) => tag_id);
    const newProductTags = req.body.tagIds.filter(tagId => !productTagIds.includes(tagId)).map(tagId => ({
      product_id: req.params.id,
      tag_id: tagId,
    }));
    const productTagsToRemove = productTags.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id)).map(({ id }) => id);

    await Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);

    res.status(200).json(productTags);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// delete a product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;