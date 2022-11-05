// Service dependencies 
const {
    testerServiceUser
} = require("../services/user.service.js")

const testUserController = (req, res) => {
    testerServiceUser()
}

module.exports = {
    testUserController
}