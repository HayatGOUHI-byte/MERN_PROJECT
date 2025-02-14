const express = require('express');
const Category = require('./models/Category');
const router = express.Router();

// Route pour récupérer toutes les catégories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour créer une nouvelle catégorie
router.post('/categories', async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
