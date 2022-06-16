
console.log('seeds file ran')
require('./config/database')
const Item = require('./models/items')





function createItem() {
    let data = {
        name: "Shoes",
        image: "https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-green-canvas-sneaker.slideshow1_ad9ff54d-41a4-4f51-abc8-1c1f26c75760.png?v=1641956260",
        price: 5,
        description: "High heels",
        quantity: 1
   
    }
Item.create(data, () => console.log ("New Item was created"))
}

// createItem()

function findItem() {
    let selectItem = Item.findOne({name: 'Shoes'}, (err, item) =>
    console.log(item))
}


// findItem()

function updateItem() {
    Item.findOneAndUpdate({name: "Shoes"}, {name: "Shoes2"}).then(() =>{
        console.log("Cat was Updated")
    })
}

