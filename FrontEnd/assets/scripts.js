//Add to cart function
$(function() {
    $(".addToCartBtn").on('click', function() {
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
            }
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

