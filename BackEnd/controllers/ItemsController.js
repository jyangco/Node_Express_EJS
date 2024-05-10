const path  = require("path")
const ItemsModel = require('../models/ItemsModel')
const HomePage = path.join(__dirname, '../../FrontEnd/view/Home')
const ProductPage = path.join(__dirname, '../../FrontEnd/view/Product')

module.exports = {
    index: (req, res) => {
        const items = ItemsModel.findAll()
        res.render(HomePage, { items })
    },
    show: (req, res) => {
        const item = ItemsModel.findById(req.params.id)
        if (item) {
            res.render(ProductPage, { item })
        } else {
            res.status(404).send("Error")
        }
    }
}