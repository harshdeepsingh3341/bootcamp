const express = require('express');
const passport = require("passport");

const router = express.Router();

router.get('/facebook', passport.authenticate(
    'facebook',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }), (req, res) => {
    console.log("facebook callback");
});

module.exports = router;