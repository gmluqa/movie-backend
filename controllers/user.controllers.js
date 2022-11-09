// Service dependencies 
const {
    registerUser
} = require("../services/user.service.js")

const registerController = (req, res) => {
    let content = req.body
    registerUser(content)
    res.send("User registered!")
}

const getDetailsController = (req, res) => {

}

const modifyUserDetailsController = (req, res) => {

}

const deleteUserController = (req, res) => {

}

module.exports = {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController
}