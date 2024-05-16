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
        if (count != 99) {
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

//Adding more or decreasing the quantity of items on the cart
$(function() {
    let prcSum = $('#sum').text()
    let numberOfItems = $('#NumOfItems').text()

    // if (itemQty == 1) {
    //     $('#incrementCrt').siblings().css('opacity', '0.5')
    //     $('#decrementCrt').siblings().css('opacity', '1')
    //     $('#decrementCrt').prop('disabled', true)
    // }

    $('#cartContainer').on('click', '#incrementCrt', function () {
        let itemQty = $('#qty').text()
        var ID = $(this).data('id')
        var Img = $(this).data('img')
        var Qty = $(this).data('qty')
        var Ttl = $(this).data('ttl')
        var Price = $(this).data('price')
        var Name = $(this).data('name')
        if (itemQty != 99) {
            $('#incrementCrt').prop('disabled', false)
            $('#decrementCrt').prop('disabled', false)
            $('#incrementCrt').siblings().css('opacity', '1')
            $('#decrementCrt').siblings().css('opacity', '1')
            itemQty++
            Qty = itemQty
            Ttl = Qty*Price
            prcSum = parseInt(prcSum) + Price
            $.ajax({                        
                url: `/cart-quantity-${ID}`,
                type: 'PUT',
                data: { 
                    name: Name, 
                    image: Img,
                    price: Price, 
                    quantity: Qty,
                    total: Ttl
                },
                success: function(response) {
                    numberOfItems++
                    $('#qty').text(Qty)
                    $('#cartContainer' > '#ttl').text(Ttl)
                    $('#sum').text(prcSum)
                    $('#NumOfItems').text(numberOfItems)
                },
            })
        } else {
            $('#decrementCrt').siblings().css('opacity', '0.5')
            $('#incrementCrt').siblings().css('opacity', '1')
            $('#decrementCrt').prop('disabled', false)
            $('#incrementCrt').prop('disabled', true)
        }
    })

    $('#decrementCrt').click(function () {
        var ID = $(this).data('id')
        var Img = $(this).data('img')
        var Qty = $(this).data('qty')
        var Ttl = $(this).data('ttl')
        var Price = $(this).data('price')
        var Name = $(this).data('name')
        if (itemQty != 1) {
            $('#incrementCrt').prop('disabled', false)
            $('#decrementCrt').prop('disabled', false)
            $('#incrementCrt').siblings().css('opacity', '1')
            $('#decrementCrt').siblings().css('opacity', '1')
            itemQty--
            Qty = itemQty
            Ttl = Qty*Price
            prcSum = parseInt(prcSum) - Price
            $.ajax({                        
                url: `/cart-quantity-${ID}`,
                type: 'PUT',
                data: { 
                    name: Name, 
                    image: Img,
                    price: Price, 
                    quantity: Qty,
                    total: Ttl
                },
                success: function(response) {
                    numberOfItems--
                    $('#qty').text(Qty)
                    $('#ttl').text(Ttl)
                    $('#sum').text(prcSum)
                    $('#NumOfItems').text(numberOfItems)
                },
            })
        } else {
            $('#incrementCrt').siblings().css('opacity', '0.5')
            $('#decrementCrt').siblings().css('opacity', '1')
            $('#incrementCrt').prop('disabled', false)
            $('#decrementCrt').prop('disabled', true)
        }
    })
})
