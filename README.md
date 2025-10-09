# Tattler MongoDB API

## Description
This project is a RESTful API for Tattler, a restaurant directory application.  
It allows users to interact dynamically with restaurants and users data stored in MongoDB.  
The API provides endpoints to add new restaurants and users, retrieve existing data, and is designed for future expansion (update, delete, search, filter, etc.).

---

## Installation

1. Make sure you have **Node.js** and **MongoDB** installed.
2. Clone this repository:
```bash
git clone https://github.com/Heber16/tattler-mongodb-api.git
Navigate to the api folder:

cd tattler-mongodb-api/api
Install dependencies:

npm install
Start the server:

node src/app.js
Make sure MongoDB is running (mongod or via MongoDB Compass).

Usage
Use Postman or Insomnia to interact with the API.

Restaurants Endpoints
GET /api/restaurants
Retrieve all restaurants.

POST /api/restaurants
Add a new restaurant. Body example:

json
{
  "name": "Pizza House",
  "address": "Calle del Sol 789",
  "cuisine": "Italian",
  "rating": 4
}
Users Endpoints
GET /api/users
Retrieve all users.

POST /api/users
Add a new user. Body example:

json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}

Project Structure
api/
├── src/
│   ├── app.js           # Main server file
│   ├── models/
│   │   ├── Restaurant.js
│   │   └── User.js
│   └── routes/
│       ├── restaurants.js
│       └── users.js
├── package.json
└── package-lock.json
