const jwt = require("jsonwebtoken")

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) return res.status(401).send('Access denied!')

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (verified.id != req.params.id) {
            res.status(401).send("Access denied")
        } else {
            req.user = verified
            next()
        }
    } catch (error) {
        res.status(400).send('Invalid token!')
    }
}

const verifyAdminMiddleware = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) return res.status(401).send('Access denied!')

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (verified.Usertype !== "Admin") {
            res.status(401).send("Access denied")
        } if (verified.Usertype === "Admin") {
            req.user = verified
            next()
        }
    } catch (error) {
        res.status(400).send('Invalid token!')
    }

}

module.exports = {
    verifyTokenMiddleware,
    verifyAdminMiddleware
}