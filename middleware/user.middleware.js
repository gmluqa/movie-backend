const models = require("../models/index")

const checkIfEmailValid = async (req, res, next) => {
    // First will check if email is valid
    // Then will check if email is already registered or not
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (req.body.Email.match(emailRegex)) {
        const findUserWithEmail = await models.User.findOne({
            where: {
                Email: req.body.Email
            }
        })
        findUserWithEmail ? res.status(403).send({ message: "Email is already registered!" }) : next()
    } else {
        res.status(400).json({ message: "Invalid formatting!" })
    }


}

module.exports = {
    checkIfEmailValid
}