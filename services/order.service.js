const models = require('../models/index')

const createNewOrderSerice = async (id, body) => {
    const newOrder = new models.Order({
        User_ID: id,
        Product_ID: body.Product_ID,
    })
    await newOrder.save();
}

module.exports = {
    createNewOrderSerice
}