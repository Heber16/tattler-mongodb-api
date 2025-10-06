# ===============================================
# Script to import CSV files into MongoDB (Windows)
# Sprint 1 – Tattler Project
# ===============================================

# Import restaurants CSV
Write-Host "Importing restaurants..."
mongoimport --db=tattler --collection=restaurants --type=csv --headerline --file=.\data\restaurants.csv

# Import users CSV
Write-Host "Importing users..."
mongoimport --db=tattler --collection=users --type=csv --headerline --file=.\data\users.csv

Write-Host "Import completed successfully!"
