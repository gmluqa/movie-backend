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