const express = require('express');
const {encryptPassword} = require("../utils/passwordSecurity");
const {signUpUser, getUser} = require('../services/userService');
const {passportLocalStrategy, passportFacebookStrategy} = require('../utils/auth');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();

console.log(passportLocalStrategy);

passportLocalStrategy();
passportFacebookStrategy();

passport.serializeUser((user, done) => {
    console.log("serializeUser");
    console.log(user);

    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    console.log('deserializeUser');
    getUser(id)
        .then(response => {
            done(null, response.user);
        })
        .catch(response => {
            done(response);
        })

});

router.post('/signup', (req, res) => {
    encryptPassword(req.body.password).then(hash => {
        console.log(hash);

        req.body.password = hash;
        signUpUser(req.body).then(response => {
            res.redirect('/login');
        }).catch(response => {
            throw response;
        })
    });

});

router.post('/signup/facebook', passport.authenticate('facebook'), (req, res) => {

});

router.post('/login', passport.authenticate(
    'local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: 'Invalid email or Password'
    }), (err, req, res) => {

});
module.exports = router;