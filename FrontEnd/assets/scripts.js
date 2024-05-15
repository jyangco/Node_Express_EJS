//Add to cart function
$(function() {
    let numberOfItems = $('#NumOfItems').text()
    $('.addToCartBtn').on('click', function() {
        var itemID = $(this).data('id')
        var itemImg = $(this).data('img')
        var itemQty = $(this).data('qty')
        var itemTtl = $(this).data('ttl')
        var itemPrice = $(this).data('price')
        var itemName = $(this).data('name')

        $.ajax({
            type: 'POST',
            url: '/add-to-cart',
            data: {
                itemID: itemID,
                itemImg: itemImg,
                itemQty: itemQty,
                itemTtl: itemTtl,
                itemPrice: itemPrice,
                itemName: itemName
            },
            success: function(response) {
                numberOfItems++
                $('#NumOfItems').text(numberOfItems)
            },
        })
    })
})

//Add and decrease quantity
$(function() {
    let counter = 1
    var count = $('#qty').textContent = counter
    $('#increment').prop('disabled', false)
    $('#decrement').prop('disabled', false)

    if (count == 1) {
        $('#increment').siblings().css('opacity', '0.5')
        $('#decrement').siblings().css('opacity', '1')
        $('#decrement').prop('disabled', true)
    }

    $('#increment').click(function() {
        var price = $(this).data('price')
        if (count != 5) {
            $('#decrement').prop('disabled', false)
            $('#increment').prop('disabled', false)
            $('#increment').siblings().css('opacity', '1')
            $('#decrement').siblings().css('opacity', '1')
            count++
            $('#qty').text(count)
            $('#ttl').text(('$'+count * price))
        } else {
            $('#decrement').siblings().css('opacity', '0.5')
            $('#increment').siblings().css('opacity', '1')
            $('#decrement').prop('disabled', false)
            $('#increment').prop('disabled', true)
        }
    })

    $('#decrement').click(function() {
        var price = $(this).data('price')
        if (count != 1) {
            $('#increment').prop('disabled', false)
            $('#decrement').prop('disabled', false)
            $('#increment').siblings().css('opacity', '1')
            $('#decrement').siblings().css('opacity', '1')
            count--
            $('#qty').text(count)
            $('#ttl').text(('$'+count * price))
        } else {
            $('#increment').siblings().css('opacity', '0.5')
            $('#decrement').siblings().css('opacity', '1')
            $('#increment').prop('disabled', false)
            $('#decrement').prop('disabled', true)
        }
    })
})

//Adding more quantity for items on the cart
$(function() {
    let totalPrice = $('#ttl').text()
    let itemQty = $('#qty').text()
    $('#incrementCrt').click(function () {
        var itemID = $(this).data('id')
        var qty = $(this).data('qty')
        var price = $(this).data('price')
        itemQty++
        qty = itemQty
        totalPrice = qty*price
        $.ajax({                        
            url: '/cart-quantity',
            type: 'POST',
            data: { id: itemID, quantity: qty, total: totalPrice },
            success: function(response) {
                $('#qty').text(itemQty)
                $('#ttl').text(totalPrice)
            },
        })
    })
})