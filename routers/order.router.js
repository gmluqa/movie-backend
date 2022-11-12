const express = require("express");
const orderRouter = express.Router()

const {
    createNewOrderController,
    getOrdersFromUserController,
    modifyOrderController,
    getAllOrdersController
} = require("../controllers/order.controllers.js")

const {
    verifyUserTokenMiddleware
} = require("../middleware/auth.middleware")

orderRouter.post("/newOrder", verifyUserTokenMiddleware, createNewOrderController)
orderRouter.get("/user/:id", getOrdersFromUserController)
orderRouter.patch("/modify/:id", modifyOrderController)
orderRouter.get("/listAll", getAllOrdersController)

module.exports = orderRouter