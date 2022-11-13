const checkIfEmailValid = (req, res, next) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    next()
}

module.exports = {
    checkIfEmailValid
}