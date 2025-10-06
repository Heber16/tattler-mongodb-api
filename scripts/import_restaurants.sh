#!/bin/bash
# Script to import CSV files into MongoDB

# Import restaurants
mongoimport --db=tattler --collection=restaurants --type=csv --headerline --file=../data/restaurants.csv

# Import users 
mongoimport --db=tattler --collection=users --type=csv --headerline --file=../data/users.csv

echo "Import completed!"