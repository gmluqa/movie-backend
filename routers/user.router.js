const express = require("express");
const userRouter = express.Router()

const {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController,
    logInUserController,
    getByEmailController
} = require("../controllers/user.controllers.js")

const {
    verifyTokenMiddleware,
    verifyAdminMiddleware
} = require('../middleware/auth.middleware')

const { checkIfEmailValid } = require("../middleware/user.middleware")

userRouter.post("/register", checkIfEmailValid, registerController)
userRouter.post("/login", logInUserController)
userRouter.get("/getUserDetails/:id", verifyTokenMiddleware, getDetailsController)
userRouter.patch("/modifyUserDetails/:id", verifyTokenMiddleware, modifyUserDetailsController)
userRouter.delete("/deleteUser/:id", verifyAdminMiddleware, deleteUserController)
userRouter.get("/getUserByEmail/email/:Email",verifyAdminMiddleware, getByEmailController)
module.exports = userRouter