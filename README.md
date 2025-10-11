## Tattler – JSON to MongoDB API & React Client

Overview

Tattler is a web application that manages restaurant data using a Node.js + Express + MongoDB API and a React front-end.
The project was developed under the Scrum methodology and completed in 3 sprints.

The system allows users to:

View a list of restaurants.

Search restaurants by name or cuisine.

Sort restaurants by rating or name.

Add new restaurants through the front-end interface.

Technologies Used

Back-End:

Node.js

Express.js

MongoDB (Mongoose ODM)

Front-End:

React (Create React App)

Fetch API for backend integration

Other Tools:

Git & GitHub for version control

Postman for API testing

🚀 How to Run the Project
1. Clone the repository:
git clone https://github.com/yourusername/tattler-mongodb-api.git
cd tattler-mongodb-api

2. Start the backend
cd tattler-api
npm install
npm start


The API runs on http://localhost:3000

3. Start the frontend
cd tattler-client
npm install
npm start


The React app runs on http://localhost:3001
 (or another port if 3000 is in use)

📊 Sprint Breakdown
Sprint 1 – Database Setup

Created MongoDB collections from CSV data.

Implemented basic CRUD structure.

Uploaded initial dataset.

Repository and documentation setup.

Sprint 2 – API Integration

Developed Express routes for CRUD operations.

Implemented search and filtering features.

Tested API endpoints using Postman.

Sprint 3 – Front-End Development

Built React interface to display restaurants.

Added search and sorting features.

Connected front-end with API.

Final testing and version documentation.

Example API Endpoints
Method	Endpoint	Description
GET	/api/restaurants	Retrieve all restaurants
GET	/api/restaurants?search=pasta	Search restaurants by name
POST	/api/restaurants	Add a new restaurant
GET	/api/restaurants?sort=rating	Sort restaurants by rating
