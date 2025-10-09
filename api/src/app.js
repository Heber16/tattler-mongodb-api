const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tattler')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error(err));

const restaurantsRoutes = require('./routes/restaurants');
const usersRoutes = require('./routes/users');

app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));