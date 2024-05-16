const cart = []
module.exports = {
    findAll: () => cart,
    addToCart: (newCartItem) => {
        const cartItems = cart.find(item => item.id == newCartItem.id)
        if (cartItems) {
            cartItems.name = cartItems.name
            cartItems.image = cartItems.image
            cartItems.price = cartItems.price
            cartItems.quantity = cartItems.quantity + 1
            cartItems.total = cartItems.quantity * cartItems.price
        } else {
            cart.push(newCartItem)
        }
    },
    updateCart: (id, cartItem) => {
        const cartToBeUpdated = cart.find(item => item.id == id)
        cartToBeUpdated.name = cartItem.name
        cartToBeUpdated.image = cartItem.image
        cartToBeUpdated.price = cartItem.price
        cartToBeUpdated.quantity = cartItem.quantity
        cartToBeUpdated.total = cartItem.total
    }
}