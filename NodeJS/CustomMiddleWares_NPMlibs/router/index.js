const express = require('express');
let users = require('../data/users');
const {authCheck} = require("../middlewares");

const router = express.Router();

router.post('/login',(req,res) => {
    const {username, password} = req.body;
    const userIndex = users.findIndex(element => (element.username === username && element.password === password));
    console.log(username, password, userIndex);
    
    if(userIndex !== -1){
        users[userIndex].isAuth = true;
        users[userIndex].authToken = Math.floor(Math.random() * 10000);
        res.append("Set-Cookie", `token=${users[userIndex].authToken}; path=/`);
        res.json({
            status: 200,
            message: "success"
        });
    } else{
        res.json({
            status: 404,
            message: "wrong username/password"
        })
    }
});

router.get('/', authCheck, (req,res) => {

})

module.exports = router;