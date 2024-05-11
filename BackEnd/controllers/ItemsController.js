const path  = require("path")
const ItemsModel = require('../models/ItemsModel')
const CartModel = require('../models/CartModel')
const HomePage = path.join(__dirname, '../../FrontEnd/view/Home')
const ProductPage = path.join(__dirname, '../../FrontEnd/view/Product')

module.exports = {
    index: (req, res) => {
        let cartCount = 0
        const items = ItemsModel.findAll()
        const cartItems = CartModel.findAll()
        res.render(HomePage, { items, cartItems })
    },
    show: (req, res) => {
        const item = ItemsModel.findById(req.params.id)
        const cartItems = CartModel.findAll()
        if (item) {
            res.render(ProductPage, { item, cartItems })
        } else {
            res.status(404).send("Error")
        }
    }
}