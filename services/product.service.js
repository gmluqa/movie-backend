const { Op } = require("sequelize");
const models = require('../models/index')

const movieGetTopRated = async () => {
    const topRatedMovies = await models.Product.findAll({
        where: {
            rating: {
                [Op.gt]: 5
            }
        }

    })
    return topRatedMovies
}

module.exports = {
    movieGetTopRated
}