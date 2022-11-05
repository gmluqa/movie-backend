// Service dependencies 
const {
    testerServiceOrder
} = require("../services/order.service.js")

const testOrderController = (req, res) => {
    let resp = testerServiceOrder()
    res.send(resp)
}

module.exports = {
    testOrderController
}