// Service dependencies 

const ProductModel = require("../models/product.js")

const { movieGetTopRated, movieGetById, movieGetByName } = require("../services/product.service.js")

const movieGetTopRatedController = async (req, res) => {
    const resp = await movieGetTopRated()
    res.json(resp)
}

const movieGetByIdController = async (req, res) => {
    const { id } = req.params
    const resp = await movieGetById(id)
    res.json(resp)
}

const movieGetByNameController = async (req, res) => {
    const { Name } = req.params
    const resp = await movieGetByName(Name)
    res.json(resp)
}

module.exports = {
    movieGetTopRatedController, movieGetByIdController, movieGetByNameController
}