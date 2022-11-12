// Service dependencies 
const {
    registerUser,
    getDetails,
    logInUser,
    bcryptCompare
} = require("../services/user.service.js")

const registerController = (req, res) => {
    let content = req.body
    registerUser(content)
    res.status(201).send({
        message: "User registered succesfully!"
    })
}

const getDetailsController = async (req, res) => {
    let { id } = req.params
    const resp = await getDetails(id)
    res.json(resp)
}

const modifyUserDetailsController = (req, res) => {

}

const deleteUserController = (req, res) => {

}

const logInUserController = async (req, res) => {
    const body = req.body
    const respLogInUser = await logInUser(body)
    console.log(respLogInUser.Password, body.Password)
    const respBcryptCompare = await bcryptCompare(body.Password, respLogInUser.Password)
    res.send(respBcryptCompare)
}

module.exports = {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController,
    logInUserController
}