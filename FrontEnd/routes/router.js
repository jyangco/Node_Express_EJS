const { Router } = require("express")
const path  = require("path")

const HomePage = path.join(__dirname, '../view/Home')
const AboutPage = path.join(__dirname, '../view/About')

const routes = Router()

routes.get('/', (req, res) => {
    res.render(HomePage)
})

routes.get('/about', (req, res) => {
    res.render(AboutPage)
})

module.exports = routes