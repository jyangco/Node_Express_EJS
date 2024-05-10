const path  = require("path")
const CartModel = require('../models/CartModel')
const CartPage = path.join(__dirname, '../../FrontEnd/view/MyCart')

module.exports = {
    index: (req, res) => {
        const cartItems = CartModel.findAll()
        res.render(CartPage, { cartItems })
    },
    addToCart: (req, res) => {
        const { itemID, itemName, itemPrice, itemQty } = req.body
        const newCartItem = {
            id: itemID, name: itemName, price: itemPrice, quantity: itemQty
        }
        CartModel.addToCart(newCartItem)
        res.redirect('/')
    }
}