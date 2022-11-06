const { Op } = require("sequelize");
const models = require('../models/index')

const movieGetTopRated = async () => {
    const topRatedMovies = await models.Product.findAll({
        where: {
            rating: {
                [Op.gt]: 6
            },
            ContentType: "Movie"
        }

    })
    return topRatedMovies
}

const movieGetById = async (id) => {
    const pickedMovie = await models.Product.findOne({
        where: {
            id: id,
            ContentType: "Movie"
        }
    })
    return pickedMovie;
}

const movieGetByName = async (name) => {
    const pickedMovieByName = await models.Product.findOne({
        where: {
            Name: name,
            ContentType: "Movie"
        }
    })
    return pickedMovieByName
}

const moviesGetByGenre = async (genre) => {
    const moviesByGenre = await models.Product.findAll({
        attributes: ['Name'],
        where: {
            Genre: genre,
            ContentType: "Movie"
        }
    })
    return moviesByGenre
}

const seriesGetTopRated = async () => {
    const topRatedSeries = await models.Product.findAll({
        where: {
            rating: {
                [Op.gt]: 6
            },
            ContentType: "Series"
        }

    })
    return topRatedSeries
}

module.exports = {
    movieGetTopRated,
    movieGetById,
    movieGetByName,
    moviesGetByGenre,
    seriesGetTopRated
}