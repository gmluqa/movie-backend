const express = require("express");
const productRouter = express.Router()

const {
    movieGetTopRatedController,
    movieGetByIdController,
    movieGetByNameController,
    moviesGetByGenreController,
    seriesGetTopRatedController,
    seriesGetByIdController,
    seriesGetByNameController

} = require("../controllers/product.controller.js")

// Movie endpoints
productRouter.get("/movies/getTopRated", movieGetTopRatedController)
productRouter.get("/movies/id/:id", movieGetByIdController);
productRouter.get("/movies/name/:Name", movieGetByNameController);
productRouter.get("/movies/getByGenre/:Genre", moviesGetByGenreController);

// Series endpoints
productRouter.get("/series/getTopRated", seriesGetTopRatedController);
productRouter.get("/series/id/:id", seriesGetByIdController);
productRouter.get("/series/name/:Name", seriesGetByNameController);




module.exports = productRouter