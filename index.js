const app = require('./app')
require('dotenv').config()
const db = require('./db/db.js')

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}, \nWelcome to The Comfy Zone 😎`)

    db.sync({ force: true }).then(() => {
        console.log("Connected to database!")
    }).catch(error => {
        console.log('Uh oh, error: ' + error)
    })
})