const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

// GET all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;