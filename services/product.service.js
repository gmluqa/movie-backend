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
    const pickedMovie = await models.Product.findAll({
        where: {
            id: id,
            ContentType: "Movie"
        }
    })
    return pickedMovie;
}

module.exports = {
    movieGetTopRated, movieGetById
}