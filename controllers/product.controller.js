// Service dependencies 

const ProductModel = require("../models/product.js")

const { movieGetTopRated } = require("../services/product.service.js")

const movieGetTopRatedController = async (req, res) => {
    const topRatedMovies = await movieGetTopRated()
    res.json(topRatedMovies)
}

module.exports = {
    movieGetTopRatedController
}