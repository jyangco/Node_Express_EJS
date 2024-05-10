const cart = []

module.exports = {
    findAll: () => cart,
    addToCart: (newCartItem) => {
        cart.push(newCartItem)
    }
}