const { Router } = require("express")
const routes = Router()

const ItemsController = require("../controllers/ItemsController")
const CartController = require("../controllers/CartController")

routes.get('/', ItemsController.index)
routes.get('/product/:id', ItemsController.show)

routes.get('/my-cart', CartController.index)
routes.post('/add-to-cart', CartController.addToCart)

module.exports = routes