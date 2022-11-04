const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running on localhost:${PORT}, \nWelcome to: ${process.env.WELCOME_TO} 😎`))