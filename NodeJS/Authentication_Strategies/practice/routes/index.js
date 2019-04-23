const express = require('express');
const data = require('../data');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const authMW = require('../middleware');

const router = express.Router();

passport.use(new LocalStrategy((username, password, done) => {
    const findUser = data.find(element => (
        element.username === username && element.password === password
    ));
    if (findUser) {
        return done(null, findUser);
    } else {
        console.log("error");
        return done(null, false, {status: "User not found"})

    }
}));

passport.serializeUser((user, done) => {
    console.log("serialize user");

    done(null, user)
});

passport.deserializeUser((user, done) => {
    console.log("deserialize user");
    
    done(null, user);
});

router.get('/', (req,res) => {
    res.json(req.user);
})

router.get('/login', (req,res) => {
    res.render('login', {title: "Login"});
});

router.get('/isAuthenticated', authMW, (req,res) => {
    res.send('yes');
});

router.get('/isPublic', (req,res) => {
    res.send('yes');
});

router.post('/login', passport.authenticate('local', {successRedirect: '/isAuthenticated', failureRedirect: '/login', session: true}) ,(req,res) => {
    res.end(JSON.stringify(req.user))
})


module.exports = router;