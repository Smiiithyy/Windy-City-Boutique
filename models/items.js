const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String
})


const itemSchema = new Schema ({
    name: String,
    image: String,
    price: Number, 
    description: String,
    quantity: Number,
})

// const Item = mongoose.model('Item', itemSchema)
// // const User = mongoose.model('User', userSchema)

// module.exports = {
//     Item
//     // User: User,
// }

Item = mongoose.model('Item', itemSchema)
User = mongoose.model('User', userSchema)

module.exports = {
    Item,
    User
};