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
    verifyTokenMiddleware,
    verifyAdminMiddleware
} = require("../middleware/auth.middleware")

orderRouter.post("/newOrder", verifyUserTokenMiddleware, createNewOrderController)
orderRouter.patch("/modify/:id", verifyUserTokenMiddleware, modifyOrderController)
orderRouter.get("/user/:id", verifyTokenMiddleware, getOrdersFromUserController)
orderRouter.get("/listAll", verifyAdminMiddleware, getAllOrdersController)

module.exports = orderRouter