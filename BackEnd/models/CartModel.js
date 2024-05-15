const cart = []
module.exports = {
    findAll: () => cart,
    addToCart: (newCartItem) => {
        cart.push(newCartItem)
    },
    updateCart: (id, quantity, total) => {
        cartItems = cart.map(item => item.id == id ? { ...item, quantity, total } : item)
        return cartItems
    }
}