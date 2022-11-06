// Service dependencies 
const {
    registerUser
} = require("../services/user.service.js")

const registerController = (req, res) => {
    let content = req.body
    registerUser(content)
}

module.exports = {
    registerController
}