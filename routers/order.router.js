const express = require("express");
const orderRouter = express.Router()

const {
    createNewOrderController,
    getOrdersFromUserController,
    modifyOrderController,
    getAllOrdersController
} = require("../controllers/order.controllers.js")

const {
    verifyUserTokenMiddleware,
    verifyTokenMiddleware
} = require("../middleware/auth.middleware")

orderRouter.post("/newOrder", verifyUserTokenMiddleware, createNewOrderController)
orderRouter.patch("/modify/:id", verifyUserTokenMiddleware, modifyOrderController)
orderRouter.get("/user/:id", verifyTokenMiddleware, getOrdersFromUserController)
orderRouter.get("/listAll", getAllOrdersController)

module.exports = orderRouter