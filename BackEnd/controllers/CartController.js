const path  = require("path")
const CartModel = require('../models/CartModel')
const CartPage = path.join(__dirname, '../../FrontEnd/view/MyCart')

module.exports = {
    showAll: (req, res) => {
        const cartItems = CartModel.findAll()
        res.render(CartPage, {cartItems} )
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
        res.json({ message: 'Item added to cart successfully'})
    },
    updateCart: (req, res) => {
        const { name, image, price, quantity, total } = req.body
        const cartItem = {
            name: name, 
            image: image,
            price: parseInt(price), 
            quantity: parseInt(quantity),
            total: parseInt(total)
        }
        CartModel.updateCart(req.params.id, cartItem)
        res.json({ message: 'Item updated' })
    },
}