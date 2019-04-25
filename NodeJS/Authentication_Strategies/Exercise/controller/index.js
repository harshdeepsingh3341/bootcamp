const express = require('express');
const users = require('./userController');
const callbacks = require('./callbacksController');
const {isLoggedIn} = require("../middlewares");

const router = express.Router();

router.get('/', isLoggedIn, (req, res, next) => {
    console.log(req.user);
    
    res.render('index', {title: 'Home', isLoggedIn: true, user: req.user._doc})
});

router.get('/signup', isLoggedIn, (req, res) => {
    res.render('signup', {title: 'Sign Up', isLoggedIn: false})
});

router.get('/login', isLoggedIn, (req, res) => {
    res.render('login', {title: 'Log In', isLoggedIn: false})
});

router.get('/logout', isLoggedIn, (req,res) => {
    console.log(req.logout);
    
    req.logout();
    res.redirect('/')
})


module.exports = {
    router,
    users,
    callbacks
};