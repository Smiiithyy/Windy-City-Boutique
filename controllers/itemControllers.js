const {Item, User} = require('../models/items')

function createItem(req,res){
    let newItem = new Item(req.body)
    newItem.save(() => console.log("New item was saved!"))
    res.redirect('/items')
}

function newItem(req,res){
    res.render('new')
}

async function showItems(req, res) {
    let allItems = await Item.find({})
    res.render('index', {allItems, user: req.user})
}

function showDetail(req, res) {

    console.log(req.params.itemId)

    Item.findById(req.params.itemId).then((item) => {
        console.log(item)
        res.render('itemDetails', {item})
        
    })
}

function updateItem(req,res) {
    Item.findByIdAndUpdate(req.params.itemId, req.body)
    .then(() => {
        res.redirect(`/items/${req.params.itemId}`)
        })
}

function deleteItem(req,res) {
    Item.findByIdAndDelete(req.params.itemId)
    .then(() =>{
        res.redirect('/items')
    })
}

// function index(req, res, next) {
//     console.log(req.query)
//     // Make the query object to use with Student.find based up
//     // the user has submitted the search form or now
//     let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//     // Default to sorting by name
//     let sortKey = req.query.sort || 'name';
//     User.find(modelQuery)
//     .sort(sortKey).exec(function(err, students) {
//       if (err) return next(err);
//       // Passing search values, name & sortKey, for use in the EJS
//       res.render('/items', {
//         students,
//         user: req.user,
//         name: req.query.name,
//         sortKey
//       });
//     });
//   }


module.exports= {
    newItem,
    createItem,
    showItems,
    showDetail,
    updateItem,
    deleteItem,
}