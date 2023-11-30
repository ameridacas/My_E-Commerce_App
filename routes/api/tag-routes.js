const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/api/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/api/tags/:id', (req, res) => {
  // create a new tag
});

router.put('/api/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/api/tags/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
