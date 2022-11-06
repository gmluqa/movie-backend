const express = require("express");
const productRouter = express.Router()

const {
    movieGetTopRatedController,
    movieGetByIdController,
    movieGetByNameController,
    moviesGetByGenreController,
    seriesGetTopRatedController

} = require("../controllers/product.controller.js")

productRouter.get("/movies/getTopRated", movieGetTopRatedController)
productRouter.get("/movies/id/:id", movieGetByIdController);
productRouter.get("/movies/name/:Name", movieGetByNameController);
productRouter.get("/movies/getByGenre/:Genre", moviesGetByGenreController);
productRouter.get("/series/getTopRated", seriesGetTopRatedController);



// productRouter.method("/path", controller)

module.exports = productRouter