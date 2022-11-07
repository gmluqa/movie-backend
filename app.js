const express = require('express')
const app = express()


//Routes
const productRouter = require("./routers/product.router.js");
const orderRouter = require("./routers/order.router.js");
const userRouter = require("./routers/user.router.js");

// Middleware
app.use(express.json())
app.use("/product", productRouter);
// app.use("/order", orderRouter);
app.use("/user", userRouter);


module.exports = app