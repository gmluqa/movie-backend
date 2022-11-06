const express = require("express");
const userRouter = express.Router()

const {
    registerController
} = require("../controllers/user.controllers.js")

userRouter.post("/register", registerController)
// userRouter.method("/path", controller)

module.exports = userRouter