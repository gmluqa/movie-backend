const express = require("express");
const userRouter = express.Router()

const {
    registerController,
    getDetailsController
} = require("../controllers/user.controllers.js")

userRouter.post("/register", registerController)
// userRouter.get("/getDetails", getDetailsController)
// userRouter.method("/path", controller)

module.exports = userRouter