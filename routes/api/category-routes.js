const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
    } else {
      res.json(category);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const category = await Category.create({
      category_name: req.body.category_name
    });
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [rowsUpdated] = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );
    if (rowsUpdated === 0) {
      res.status(404).json({ message: 'No category found with this id' });
    } else {
      res.json(rowsUpdated);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const rowsDeleted = await Category.destroy({ where: { id: req.params.id } });
    if (rowsDeleted === 0) {
      res.status(404).json({ message: 'No category found with this id' });
    } else {
      res.json(rowsDeleted);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;