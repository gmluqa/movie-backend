// Service dependencies 
const {
    createNewOrderSerice,
    modifyOrder,
    getAllOrders
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

const getOrdersFromUserController = async (req, res) => {
    const token = req.header("auth-token")
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const userId = decoded.id
    const resp = await getAllOrders(userId)
    res.json(resp)

}
const modifyOrderController = async (req, res) => {
    const body = req.body
    const token = req.header("auth-token")
    await modifyOrder(body, token)
    res.status(201).send({ message: "Order changed succesfully!" })
}
const getAllOrdersController = async (req, res) => {

}

module.exports = {
    createNewOrderController,
    getOrdersFromUserController,
    modifyOrderController,
    getAllOrdersController
}