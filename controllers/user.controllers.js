// Service dependencies 
const {
    registerUser,
    getDetails
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

module.exports = {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController
}