const express = require("express");
const productRouter = express.Router()

const {
    movieGetTopRatedController, movieGetByIdController, movieGetByNameController

} = require("../controllers/product.controller.js")

productRouter.get("/movies/getTopRated", movieGetTopRatedController)
productRouter.get("/movies/id/:id", movieGetByIdController);
productRouter.get("/movies/name/:Name", movieGetByNameController);

// productRouter.method("/path", controller)

module.exports = productRouter