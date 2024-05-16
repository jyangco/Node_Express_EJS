const express = require("express")
const app = express()
const port = 3000

const routes = require('./BackEnd/routes/router')

const path  = require("path")
const directory = path.join(__dirname, './FrontEnd/assets')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(express.static(directory))
app.use(routes)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})