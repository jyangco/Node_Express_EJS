const express = require("express")
const routes = require('./FrontEnd/routes/router')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(routes)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})