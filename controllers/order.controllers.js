// Service dependencies 
const {
    createNewOrderSerice,
    modifyOrder,
    getAllOrders,
    getAllOrdersFromId
} = require("../services/order.service.js")


const jwt = require("jsonwebtoken")

const createNewOrderController = async (req, res) => {
    try {
        const body = req.body
        const token = req.header("auth-token")
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const userId = decoded.id
        await createNewOrderSerice(userId, body)
        res.status(201).send({ message: "Order created succesfully!" })
    }
    catch (error) {
        res.status(404).send({ message: "Product not found!" })
    }
}

const getOrdersFromUserController = async (req, res) => {
    try {
        const token = req.header("auth-token")
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const userId = decoded.id
        const resp = await getAllOrdersFromId(userId)
        res.json(resp)
    }
    catch (error) {
        res.status(401).json({ message: "Malformed request" })
    }
}

const modifyOrderController = async (req, res) => {
    try {
        const body = req.body
        const token = req.header("auth-token")
        await modifyOrder(body, token)
        res.status(201).send({ message: "Order changed succesfully!" })
    }
    catch (error) {
        res.status(404).send({ message: "Product not found!" })
    }
}
const getAllOrdersController = async (req, res) => {
    try {
        const resp = await getAllOrders()
        res.json(resp)
    }
    catch (error) {
        res.status(401).json({ message: "Malformed request" })
    }
}

module.exports = {
    createNewOrderController,
    getOrdersFromUserController,
    modifyOrderController,
    getAllOrdersController
}