const express = require("express");
const productRouter = express.Router()

const {
    movieGetTopRatedController

} = require("../controllers/product.controller.js")

productRouter.get("/topRated", movieGetTopRatedController)
// productRouter.method("/path", controller)

module.exports = productRouter