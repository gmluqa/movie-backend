const {
    movieGetTopRated,
    movieGetById,
    movieGetByName,
    moviesGetByGenre,
    seriesGetTopRated,
    seriesGetById,
    seriesGetByName,
    seriesGetWithNextEpWeek,
    seriesGetTheatrePass
} = require("../services/product.service.js")

// Intersting observation, 204 http statuses with express cannot return messages
// Read more about it here: https://bambielli.com/til/2017-03-26-express-res-204/
// TODO: Add this section to readme as intersting discovery 

// Serves not found message in RARE case of failed to find any top movies
const movieGetTopRatedController = async (req, res) => {
    const resp = await movieGetTopRated()
    resp[0] ? res.status(202).json(resp) : res.status(204).json()
}

// Serves not found message in case of failed to find movie by ID
const movieGetByIdController = async (req, res) => {
    const { id } = req.params
    const resp = await movieGetById(id)
    resp ? res.status(202).json(resp) : res.status(204).json()
}

// Serves not found message in case of failed to find movie by Name
const movieGetByNameController = async (req, res) => {
    const { Name } = req.params
    const resp = await movieGetByName(Name)
    resp ? res.status(202).json(resp) : res.status(204).json()
}

// etc...
const moviesGetByGenreController = async (req, res) => {
    const { Genre } = req.params
    const resp = await moviesGetByGenre(Genre)
    console.log(resp)
    resp[0] ? res.status(202).json(resp) : res.status(204).json()
}

const seriesGetTopRatedController = async (req, res) => {
    const resp = await seriesGetTopRated()
    resp[0] ? res.status(202).json(resp) : res.status(204).json()
}

const seriesGetByIdController = async (req, res) => {
    const { id } = req.params
    const resp = await seriesGetById(id)
    resp ? res.status(202).json(resp) : res.status(204).json()
}

const seriesGetByNameController = async (req, res) => {
    const { Name } = req.params
    const resp = await seriesGetByName(Name)
    resp ? res.status(202).json(resp) : res.status(204).json()
}

const seriesGetWithNextEpWeekController = async (req, res) => {
    const resp = await seriesGetWithNextEpWeek()
    resp[0] ? res.status(202).json(resp) : res.status(204).json()
}

const seriesGetTheatrePassController = async (req, res) => {
    const resp = await seriesGetTheatrePass()
    resp[0] ? res.status(202).json(resp) : res.status(204).json()
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
    seriesGetTheatrePassController
}