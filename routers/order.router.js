const express = require("express");
const orderRouter = express.Router()

const {
    testOrderController
} = require("../controllers/order.controllers.js")

orderRouter.get("/test", testOrderController)

module.exports = orderRouter