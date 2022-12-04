const app = require('./app')
require('dotenv').config()
const db = require('./db/db.js')

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${process.env.DB_HOST}:${PORT}, \nWelcome to The Comfy Zone 😎`)

    db.sync({ force: true }).then(() => {
        console.log("Connected to database!")
    }).catch(error => {
        console.log('Uh oh, error: ' + error)
    })
})