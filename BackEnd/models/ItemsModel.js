const items = [
    {   id: 1, 
        name: 'Item 1', 
        image: 'item.jpg',
        desc: 'Brief description',
        price: '$5' 
    },
    {   id: 2, 
        name: 'Item 2', 
        image: 'item.jpg',
        desc: 'Brief description',
        price: '$10' 
    },
    {   id: 3, 
        name: 'Item 3', 
        image: 'item.jpg',
        desc: 'Brief description',
        price: '$15' 
    },
    {   id: 4, 
        name: 'Item 4', 
        image: 'item.jpg',
        desc: 'Brief description',
        price: '$20' 
    },
]

module.exports = {
    findAll: () => items,
    findById: (id) => items.find(item => item.id == id)
}