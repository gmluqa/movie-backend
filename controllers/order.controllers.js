// Service dependencies 
const {
    createNewOrderSerice
} = require("../services/order.service.js")


const jwt = require("jsonwebtoken")

const createNewOrderController = async (req, res) => {
    const body = req.body
    const token = req.header("auth-token")
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const userId = decoded.id
    await createNewOrderSerice(userId, body)
    res.status(201).send({
        message: "Order created succesfully!"
    })
}

const getOrdersFromUserController = () => {

}
const modifyOrderController = () => {

}
const getAllOrdersController = () => {

}

module.exports = {
    createNewOrderController,
    getOrdersFromUserController,
    modifyOrderController,
    getAllOrdersController
}