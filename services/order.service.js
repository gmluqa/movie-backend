const models = require('../models/index')
const jwt = require('jsonwebtoken')

const createNewOrderSerice = async (id, body) => {
    const newOrder = new models.Order({
        User_ID: id,
        Product_ID: body.Product_ID,
    })
    await newOrder.save();
}

const modifyOrder = async (body, token) => {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    await models.Order.update({
        Product_ID: body.Product_ID
    }, {
        where: {
            User_ID: verified.id
        }
    })
}

const getAllOrdersFromId = async (id) => {
    const allOrdersFromId = await models.Order.findAll({
        where: {
            User_ID: id
        },
        attributes: ['Product_ID']
    })
    return allOrdersFromId
}

const getAllOrders = async () => {
    const allOrders = await models.Order.findAll({
        attributes: ['id', 'Product_ID', 'User_ID']
    })
    return allOrders
}




module.exports = {
    createNewOrderSerice,
    modifyOrder,
    getAllOrdersFromId,
    getAllOrders,
}