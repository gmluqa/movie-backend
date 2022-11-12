const express = require("express");
const userRouter = express.Router()

const {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController,
    logInUserController
} = require("../controllers/user.controllers.js")

const {
    verifyTokenMiddleware,
    verifyAdminMiddleware
} = require('../middleware/auth.middleware')

userRouter.post("/register", registerController)
userRouter.post("/login", logInUserController)
userRouter.get("/getUserDetails/:id", verifyTokenMiddleware, getDetailsController)
userRouter.patch("/modifyUserDetails/:id", verifyTokenMiddleware, modifyUserDetailsController)
userRouter.delete("/deleteUser/:id", verifyAdminMiddleware, deleteUserController)

module.exports = userRouter