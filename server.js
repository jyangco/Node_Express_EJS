const express = require("express")
const routes = require('./BackEnd/routes/router')

const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(express.static('./FrontEnd/assets'))
app.use(routes)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})