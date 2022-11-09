const express = require("express");
const orderRouter = express.Router()

const {
    createNewOrderController,
    getOrdersFromUserController,
    modifyOrderController,
    getAllOrdersController
} = require("../controllers/order.controllers.js")

orderRouter.post("/orders/neworder", createNewOrderController)
orderRouter.get("/orders/user/:id", getOrdersFromUserController)
orderRouter.patch("/orders/modify/:id", modifyOrderController)
orderRouter.get("/orders/listAll", getAllOrdersController)

module.exports = orderRouter