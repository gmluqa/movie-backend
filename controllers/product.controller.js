// Service dependencies 
const {
    testerServiceProduct
} = require("../services/product.service.js")

const testProductController = (req, res) => {
    testerServiceProduct()
}

module.exports = {
    testProductController
}