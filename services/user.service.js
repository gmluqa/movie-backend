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
        Password: await hashPassword(userCredentials.Password),
        UserType: 'User'
    })
    await newUser.save();
}

const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

const getDetails = async (id) => {
    const pickedUser = await models.User.findOne({
        where: {
            id: id
        }
    })
    return pickedUser
}

const logInUser = async (body) => {
    const findUser = await models.User.findOne({
        where: {
            Email: body.Email
        },
        attributes: ['id', 'Email', 'Password', 'UserType'],
    })
    return findUser
}

const bcryptCompare = async (password, hashedPassword) => {
    console.log(password, hashedPassword)
    const passCompare = await bcrypt.compare(password, hashedPassword)
    return passCompare
}

const modifyUserDetails = async (body, id) => {
    await models.User.update({
        FirstName: body.FirstName,
        LastName: body.LastName,
        Email: body.Email,
    }, {
        where: {
            id: id
        }
    })
    if (body.Password) {
        await models.User.update({
            Password: await hashPassword(body.Password)
        }, {
            where: {
                id: id
            }
        })
    }
}

const deleteUser = async (id) => {
    await models.User.destroy({
        where: {
            id: id
        }
    });
    return
}

const getUserByEmail = async (email) =>{
    const userByEmail = await models.User.findOne({
        where: {Email : email,
        ContentType : "User"
        }
    })
        return userByEmail
}
module.exports = {
    registerUser,
    getDetails,
    logInUser,
    bcryptCompare,
    modifyUserDetails,
    hashPassword,
    deleteUser,
    getUserByEmail
}

