const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/api/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/api/categories/:id', (req, res) => {
  // create a new category
});

router.put('/api/categories/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/api/categories/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
