const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  cuisine: { type: String },
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);