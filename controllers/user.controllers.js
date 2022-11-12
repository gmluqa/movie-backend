// Service dependencies 
const {
    registerUser,
    getDetails,
    logInUser,
    bcryptCompare,
    modifyUserDetails,
    deleteUser
} = require("../services/user.service.js")

const jswonwebtoken = require("jsonwebtoken")

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

const modifyUserDetailsController = async (req, res) => {
    const body = req.body
    await modifyUserDetails(body)
    res.status(201).send({ message: "Details changed succesfully!" })
}

const deleteUserController = async (req, res) => {
    let { id } = req.params
    await deleteUser(id)
    res.status(200).json({ message: "User succesfully deleted" })
}

const logInUserController = async (req, res) => {
    const body = req.body
    const respLogInUser = await logInUser(body)
    console.log(respLogInUser.Password, body.Password)
    const respBcryptCompare = await bcryptCompare(body.Password, respLogInUser.Password)
    if (respBcryptCompare === false) {
        res.status(401).json({ message: "Password or Email incorrect!" })
    }
    else {
        const secret = process.env.ACCESS_TOKEN_SECRET || ""

        const token = jswonwebtoken.sign({
            id: respLogInUser.id,
            Email: respLogInUser.Email,
            UserType: respLogInUser.UserType
        }, secret)


        res.header('auth-token', token).send(token)
    }
}

module.exports = {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController,
    logInUserController
}