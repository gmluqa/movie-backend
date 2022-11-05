const models = require('../models/index')

const movieGetTopRated = async () => {
    const topRatedMovies = await models.Product.findAll({
        attributes: ["Name"]
    })
    return topRatedMovies
}

module.exports = {
    movieGetTopRated
}