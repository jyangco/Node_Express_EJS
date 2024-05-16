const { Router } = require("express")
const routes = Router()

const ItemsController = require("../controllers/ItemsController")
const CartController = require("../controllers/CartController")

routes.get('/', ItemsController.index)
routes.get('/product-:id', ItemsController.show)
routes.get('/my-cart', CartController.showAll)
routes.post('/add-to-cart', CartController.addToCart)
routes.put('/cart-quantity-:id', CartController.updateCart)

module.exports = routes