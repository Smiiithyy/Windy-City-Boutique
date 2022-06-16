var express = require('express');
var router = express.Router();
const passport = require('passport')
const itemsCtrl = require('../controllers/itemControllers')


router.get('/items', itemsCtrl.showItems)

router.get('/items/new', itemsCtrl.newItem)

router.get('/items/:itemId', itemsCtrl.showDetail)

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/items',
      failureRedirect : '/items'
    }
  ));

  router.get('/logout', function(req, res){
    req.logout(err => {res.redirect('/items');
});   
  });

router.post('/items', itemsCtrl.createItem)



router.patch('/items/:itemId', itemsCtrl.updateItem)

router.delete('/items/:itemId', itemsCtrl.deleteItem)

module.exports = router;
