// Service dependencies 

const ProductModel = require("../models/product.js")

const { movieGetTopRated } = require("../services/product.service.js")

const movieGetTopRatedController = async (req, res) => {
    movieGetTopRated()
}

module.exports = {
    movieGetTopRatedController
}