# RESTFUL API

Built with:

1. Express
2. Postgres (DATABASE)
3. TypeORM (ORM) / DATABASE COMMUNICATION
4. cors (CORS)
5. Morgan (Logging)
6. Redis (Caching)
 
## Endpoints

1. Product (/products)
- GET (/)
  Gets all products within the database returns them
- POST (/)
  Inserts a product in the database and returns the single inserted product from the DB back.
- PUT (/productId)
  Updates a single record in the database provided by a productId to lookup for.
- DELETE (/productId)
  Deletes a single record in the database provided by a productId as target.
  
2. Orders (/orders)


## Instructions
Type npm install for packages

Create a .env file that will house your database credentials (host, username, password, database)