const jwt = require("jsonwebtoken")

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) return res.status(401).send({ message: "Access denied!!!" })

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (verified.id != req.params.id) {
            res.status(401).send({ message: "Access denied" })
        } else {
            next()
        }
    } catch (error) {
        res.status(400).send({ message: 'Invalid token!' })
    }
}

const verifyAdminMiddleware = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) return res.status(401).send({ message: "Access denied!!!" })

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (verified.UserType === "Admin") {
            next()
        } else {
            res.status(401).json({ message: "Access denied!!!" })
        }
    } catch (error) {
        res.status(400).send({ message: 'Invalid token!' })
    }
}

const verifyUserTokenMiddleware = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) return res.status(401).send({ message: "Access denied!!!" })

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        {
            next()
        }
    } catch (error) {
        res.status(400).send({ message: 'Invalid token!' })
    }
}

module.exports = {
    verifyTokenMiddleware,
    verifyAdminMiddleware,
    verifyUserTokenMiddleware
}