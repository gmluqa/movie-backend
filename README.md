# movie-backend

# movie-backend

Welcome to my first project focused on the back-end.

For this project, I had to re-create a database similar to one a company like "BlockBusters" would use.

# Instructions

Launch db server in docker container : `npm run db:up`

Create db : `sequelize-cli db:create`

You'll have to launch the migrations that come with this repo first with: `sequelize-cli db:migrate`

Then to seed the DB, run: `sequelize-cli db:seed:all`

Launch api : `npm run listen`

# Endpoint examples

GET http://localhost:3000/product/movies/id/:id : obtains movie by id

GET http://localhost:3000/product/series/getTopRated : returns top rated series

POST
