const {
    movieGetTopRated,
    movieGetById,
    movieGetByName,
    moviesGetByGenre,
    seriesGetTopRated,
    seriesGetById,
    seriesGetByName,
    seriesGetWithNextEpWeek,
    seriesGetTheatrePass,
    articlesGetByName,
    articlesGetById
} = require("../services/product.service.js")

// Serves not found message in RARE case of failed to find any top movies
const movieGetTopRatedController = async (req, res) => {
    try {
        const resp = await movieGetTopRated()
        resp[0] ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

// Serves not found message in case of failed to find movie by ID
const movieGetByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const resp = await movieGetById(id)
        resp ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

// Serves not found message in case of failed to find movie by Name
const movieGetByNameController = async (req, res) => {
    try {
        const { Name } = req.params
        const resp = await movieGetByName(Name)
        resp ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

// etc...
const moviesGetByGenreController = async (req, res) => {
    try {
        const { Genre } = req.params
        const resp = await moviesGetByGenre(Genre)
        console.log(resp)
        resp[0] ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const seriesGetTopRatedController = async (req, res) => {
    try {
        const resp = await seriesGetTopRated()
        resp[0] ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const seriesGetByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const resp = await seriesGetById(id)
        resp ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const seriesGetByNameController = async (req, res) => {
    try {
        const { Name } = req.params
        const resp = await seriesGetByName(Name)
        resp ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const seriesGetWithNextEpWeekController = async (req, res) => {
    try {
        const resp = await seriesGetWithNextEpWeek()
        resp[0] ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const seriesGetTheatrePassController = async (req, res) => {
    try {
        const resp = await seriesGetTheatrePass()
        resp[0] ? res.status(202).json(resp) : res.status(204).json()
    }
    catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const articlesGetByNameController = async (req, res) => {
    try {
        const { Name } = req.params
        const resp = await articlesGetByName(Name)
        console.log("I responded")
        return res.status(202).json(resp)
    }
    catch (error) {
        console.log(error)
        res.status(404)
    }
}

const articlesGetByIdController = async (req, res) => {
    try {
        const { Id } = req.params
        const resp = await articlesGetById(Id)
        return res.status(202).json(resp)
    }
    catch (error) {

        console.log(error)
        res.status(404)
    }
}

module.exports = {
    movieGetTopRatedController,
    movieGetByIdController,
    movieGetByNameController,
    moviesGetByGenreController,
    seriesGetTopRatedController,
    seriesGetByIdController,
    seriesGetByNameController,
    seriesGetWithNextEpWeekController,
    seriesGetTheatrePassController,
    articlesGetByNameController,
    articlesGetByIdController
}