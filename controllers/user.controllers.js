// Service dependencies 
const {
    registerUser
} = require("../services/user.service.js")

const registerController = (req, res) => {
    let content = req.body
    registerUser(content)
    res.send("User registered!")
}

module.exports = {
    registerController
}