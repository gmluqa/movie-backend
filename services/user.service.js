const models = require('../models/index')
const sequelize = require("../db/db.js")

const testerServiceUser = () => {
    console.log("Success")
}

const registerUser = async (userCredentials) => {
    const newUser = new models.User({
        FirstName: userCredentials.FirstName,
        LastName: userCredentials.LastName,
        Email: userCredentials.Email,
        Password: userCredentials.Password,
        UserType: userCredentials.UserType

    })
    await newUser.save();
}

module.exports = {
    testerServiceUser,
    registerUser
}

