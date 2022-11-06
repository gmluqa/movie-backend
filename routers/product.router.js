const express = require("express");
const productRouter = express.Router()

const {
    movieGetTopRatedController, movieGetByIdController

} = require("../controllers/product.controller.js")

productRouter.get("/movies/getTopRated", movieGetTopRatedController)
productRouter.get("/movies/:id", movieGetByIdController);
// productRouter.method("/path", controller)

module.exports = productRouter