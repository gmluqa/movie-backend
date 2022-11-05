const models = require('../models/index')

const movieGetTopRated = async () => {
    const resp = await models.Product.findAll({
        attributes: ["Name"]
    })
    console.log(resp)
}

module.exports = {
    movieGetTopRated
}