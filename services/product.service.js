const { Op, DATE } = require("sequelize");
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

const seriesGetById = async (id) => {
    const pickedSeries = await models.Product.findOne({
        where: {
            id: id,
            ContentType: "Series"
        }
    })
    return pickedSeries;
}

const seriesGetByName = async (name) => {
    const pickedSeriesByName = await models.Product.findOne({
        where: {
            Name: name,
            ContentType: "Series"
        }
    })
    return pickedSeriesByName
}

const seriesGetWithNextEpWeek = async () => {
    const seriesNextEpsSoon = await models.Product.findAll({
        where: {
            EpInWeek: true
        }
    })
    return seriesNextEpsSoon
}


const seriesGetTheatrePass = async () => {
    const seriesTheatrePass = await models.Product.findAll({
        where: {
            TheatrePass: true
        },
        ContentType: "Series"
    })
    return seriesTheatrePass
}

const articlesGetByName = async (name) => {
    const searchResults = await models.Product.findAll({
        where: {

            Name: {
                [Op.like]: `%${name}%`
            }


        }
    })
    return searchResults
}

const articlesGetById = async (id) => {
    const getResults = await models.Product.findOne({
        where: {
            id: id
        }
    })
    return getResults
}


module.exports = {
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
}