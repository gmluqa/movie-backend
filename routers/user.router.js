const express = require("express");
const userRouter = express.Router()

const {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController,
    logInUserController
} = require("../controllers/user.controllers.js")

userRouter.post("/register", registerController)
userRouter.get("/getUserDetails/:id", getDetailsController)
userRouter.patch("/modifyUserDetails/:id", modifyUserDetailsController)
userRouter.delete("/deleteUser/:id", deleteUserController)
userRouter.post("/login", logInUserController)
// userRouter.method("/path", controller)

module.exports = userRouter