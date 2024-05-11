const path  = require("path")
const CartModel = require('../models/CartModel')
const CartPage = path.join(__dirname, '../../FrontEnd/view/MyCart')

module.exports = {
    index: (req, res) => {
        const cartItems = CartModel.findAll()
        res.render(CartPage, { cartItems })
    },
    addToCart: (req, res) => {
        const { itemID, itemImg, itemName, itemPrice, itemQty, itemTtl } = req.body
        const newCartItem = {
            id: itemID, 
            name: itemName, 
            image: itemImg,
            price: parseInt(itemPrice), 
            quantity: parseInt(itemQty),
            total: parseInt(itemTtl)
        }
        CartModel.addToCart(newCartItem)
    }
}