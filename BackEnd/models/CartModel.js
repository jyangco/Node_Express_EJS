const cart = []
module.exports = {
    findAll: () => cart,
    findById: (id) => cart.find(item => item.id == id),
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
    addCartQty: (id, cartItem) => {
        const cartToBeUpdated = cart.find(item => item.id == id)
        cartToBeUpdated.name = cartItem.name
        cartToBeUpdated.image = cartItem.image
        cartToBeUpdated.price = cartItem.price
        cartToBeUpdated.quantity = cartToBeUpdated.quantity + 1
        cartToBeUpdated.total = cartToBeUpdated.quantity * cartToBeUpdated.price
    },
    subCartQty: (id, cartItem) => {
        const cartToBeUpdated = cart.find(item => item.id == id)
        cartToBeUpdated.name = cartItem.name
        cartToBeUpdated.image = cartItem.image
        cartToBeUpdated.price = cartItem.price
        cartToBeUpdated.quantity = cartToBeUpdated.quantity - 1
        cartToBeUpdated.total = cartToBeUpdated.quantity * cartToBeUpdated.price
    }
}