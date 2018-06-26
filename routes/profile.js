const express = require('express');
const passport = require('../config/passportConfig');
const profileRoute = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const bodyParser = require('body-parser')


const db = require('../models/user');
const contacts = require('../models/contacts')
// const SavedRecipe = require('../models/savedRecipes')

profileRoute.get('/', isLoggedIn, function (req, res) {
    res.render('profile');
});

profileRoute.get('/addressbook', isLoggedIn, function (req, res) {
    res.render('addressBook', {currentUser : res.locals.currentUser})
});

profileRoute.post('/addressbook', function(req, res, next){
    db.findById(res.locals.currentUser.id, (err, success) => {
        // Check for repeats
        // contacts.find({ title: req.body.title }, (fail, item) => {
        //     // if the item already exits
        //     if (item.length > 0 ) {
        //         return res.send('recipes already exits')
        //     }

            contacts.create(req.body, (error, contact) => {
                if (error) {
                    return res.status(500).send()
                }
                success.savedContacts.push(contact);
                success.save().then(() => {
                    return res.redirect('/profile/addressbook')
                });
            })
        // })
    });
})


profileRoute.get('/createcard', isLoggedIn, function(req, res){
    res.render('createcard')
})





module.exports = profileRoute;