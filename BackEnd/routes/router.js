const { Router } = require("express")
const routes = Router()

const ItemsController = require("../controllers/ItemsController")
const CartController = require("../controllers/CartController")

routes.get('/', ItemsController.index)
routes.get('/product-:id', ItemsController.show)
routes.get('/my-cart', CartController.showAll)
routes.get('/reset-cart', CartController.resetCart)
routes.post('/add-to-cart', CartController.addToCart)
routes.put('/add-cart-quantity-:id', CartController.addCartQty)
routes.put('/sub-cart-quantity-:id', CartController.subCartQty)

module.exports = routes