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
    try {
        let content = req.body
        registerUser(content)
        res.status(201).send({
            message: "User registered succesfully!"
        })
    } catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const getDetailsController = async (req, res) => {
    try {
        let { id } = req.params
        const resp = await getDetails(id)
        res.json(resp)
    } catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const modifyUserDetailsController = async (req, res) => {
    try {
        const body = req.body
        const { id } = req.params
        console.log(id)
        await modifyUserDetails(body, id)
        res.status(201).send({ message: "Details changed succesfully!" })
    } catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const deleteUserController = async (req, res) => {
    try {
        let { id } = req.params
        await deleteUser(id)
        res.status(200).json({ message: "User succesfully deleted" })
    } catch (error) {
        res.status(400).json({ message: "Malformed request" })
    }
}

const logInUserController = async (req, res) => {
    try {
        const body = req.body
        const respLogInUser = await logInUser(body)
        console.log(respLogInUser.Password, body.Password)
        const respBcryptCompare = await bcryptCompare(body.Password, respLogInUser.Password)
        if (respBcryptCompare === false) {
            res.status(400).json({ message: "Password or Email incorrect!" })
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
    catch (error) {
        res.status(400).json({ message: "Password or Email incorrect!" })
    }
}

module.exports = {
    registerController,
    getDetailsController,
    modifyUserDetailsController,
    deleteUserController,
    logInUserController
}