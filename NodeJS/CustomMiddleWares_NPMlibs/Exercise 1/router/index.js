const express = require('express');
let users = require('../data/users');
const {authCheck} = require("../middlewares");

const router = express.Router();

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);

    const userIndex = users.findIndex(element => (element.username === username && element.password === password));
    console.log(username, password, userIndex);

    if (userIndex !== -1) {
        users[userIndex].isAuth = true;
        users[userIndex].authToken = Math.floor(Math.random() * 100000);
        res.append("Set-Cookie", `token=${users[userIndex].authToken}; path=/`);
        res.json({
            status: 200,
            message: "success"
        });
    } else {
        res.json({
            status: 404,
            message: "wrong username/password"
        })
    }
});

router.get('/', authCheck(users), (req, res) => {
    res.json({
        status: 200,
        message: "success"
    });
});

router.get('/logout', authCheck(users), (req, res) => {
    const userIndex = users.findIndex(element => element.id === req.user.id);
    users[userIndex].authToken = '';
    users[userIndex].isAuth = false;
    res.clearCookie('token', {path: '/'});
    res.json({
        status: 200,
        message: "success"
    });

});


module.exports = router;