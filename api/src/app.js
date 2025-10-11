const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/tattlerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));


const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  rating: Number,
  location: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);


app.get("/api/restaurants", async (req, res) => {
  try {
    const { search, sort } = req.query;
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    let cursor = Restaurant.find(query);

    if (sort === "ratingAsc") cursor = cursor.sort({ rating: 1 });
    if (sort === "ratingDesc") cursor = cursor.sort({ rating: -1 });

    const restaurants = await cursor.exec();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post('/api/restaurants', async (req, res) => {
  try {
    const { name, cuisine, rating, address } = req.body;
    const newRestaurant = new Restaurant({ name, cuisine, rating, address });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
