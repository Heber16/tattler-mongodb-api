# Tattler MongoDB Project

## 📌 Project Description
Tattler is a Mexican company that provides a nationwide restaurant directory.  
Due to outdated information in the directory, user traffic has dropped significantly.  

To address this challenge, the team decided to transform Tattler into a modern application that provides **personalized restaurant experiences** based on up-to-date data and user preferences.  

For this purpose, **MongoDB** will be used as the main database, and in future stages, a **REST API with Express.js** will be developed to allow users to interact dynamically with the application.

---

## ⚙️ Installation & Usage Instructions

### Prerequisites
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) installed on your system  
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) (optional but recommended)  
- Git installed

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/tattler-mongodb-api.git
   cd tattler-mongodb-api
Restore the database from the backup (example command):
mongorestore --db=tattler ./backup/tattler

Import restaurant data from CSV:
mongoimport --db=tattler --collection=restaurants --type=csv --headerline --file=./data/restaurants.csv

Verify collections in MongoDB:
mongosh
use tattler
show collections

📂 Repository Structure
tattler-mongodb-api/
├── backup/                 # Database backup (BSON/JSON files generated with mongodump)
├── data/                   # Sample CSV files for import
├── scripts/                # Import scripts for MongoDB
├── screenshots/            # Screenshots of database and collections
├── README.md               # Project documentation
└── VERSION.md              # Versioning details (XXX Guidelines)
