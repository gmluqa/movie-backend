const models = require('../models/index')
const sequelize = require('../db/db.js')
const bcrypt = require('bcrypt')

// UserType is hardcoded as "User" to prevent requests trying to force themselves as Admins
// Password is hashed, handled by bcrypt
const registerUser = async (userCredentials) => {
    const newUser = new models.User({
        FirstName: userCredentials.FirstName,
        LastName: userCredentials.LastName,
        Email: userCredentials.Email,
        Password: await hashedPasswordGen(userCredentials.Password),
        UserType: 'User'
    })
    await newUser.save();
}

const hashedPasswordGen = async (password) => {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

// do this later
// const checkEmailInstance = async (email) => {
//     const mailSearch = await models.User.findOne({
//         where: {
//             Email: email
//         }
//     })
//     if (mailSearch == null) {
//         return console.log("user not registered")
//     }
//     return Error("Test")
// }





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

