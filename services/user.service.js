const models = require('../models/index')
const sequelize = require("../db/db.js")


// UserType is hardcoded as "User" to prevent requests trying to force themselves as Admins
const registerUser = async (userCredentials) => {
    checkEmailInstance(userCredentials.Email)
    const newUser = new models.User({
        FirstName: userCredentials.FirstName,
        LastName: userCredentials.LastName,
        Email: userCredentials.Email,
        Password: userCredentials.Password,
        UserType: "User"
    })
    await newUser.save();
}

const checkEmailInstance = async (email) => {

    const mailSearch = await models.User.findOne({
        where: {
            Email: email
        }
    })

    if (mailSearch == null) {
        return console.log("user not registered")
    }
    return Error("Test")


}





const getDetails = async (id) => {
    const pickedUser = await models.User.findOne({
        where: {
            id: id
        }
    })
    return pickedUser
}

module.exports = {
    registerUser,
    getDetails
}

