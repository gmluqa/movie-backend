// Service dependencies 

// const ProductModel = require("../models/product.js")

const {
    movieGetTopRated,
    movieGetById,
    movieGetByName,
    moviesGetByGenre,
    seriesGetTopRated,
    seriesGetById,
    seriesGetByName
} = require("../services/product.service.js")

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

const moviesGetByGenreController = async (req, res) => {
    try {
        const { Genre } = req.params
        const resp = await moviesGetByGenre(Genre)
        res.json(resp)
    }
    catch (error) {
        res.json(error.message)
    }
}

const seriesGetTopRatedController = async (req, res) => {
    const resp = await seriesGetTopRated()
    res.json(resp)
}

const seriesGetByIdController = async (req, res) => {
    const { id } = req.params
    const resp = await seriesGetById(id)
    res.json(resp)
}

const seriesGetByNameController = async (req, res) => {
    const { Name } = req.params
    const resp = await seriesGetByName(Name)
    res.json(resp)
}


module.exports = {
    movieGetTopRatedController,
    movieGetByIdController,
    movieGetByNameController,
    moviesGetByGenreController,
    seriesGetTopRatedController,
    seriesGetByIdController,
    seriesGetByNameController
}