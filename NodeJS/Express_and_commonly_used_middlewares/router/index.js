const express = require('express');
let users = require('../data/users');
const {addTimestamp} = require("../middlewares");

const router = express.Router();


router.get('/', (req, res) => {
    users.length === 0 ? (
        res.json({
            status: 404,
            message: 'no user found'
        })
    ) : (
        res.json({
            status: 200,
            message: 'success',
            data: users
        })
    )
});

router.delete('/:id', (req, res) => {
    const {params: {id}} = req;
    const userIndex = users.findIndex(element => element.id === +id);
    console.log(userIndex);

    if (userIndex !== -1) {
        users = users.filter(element => {
            return element.id !== +id;
        });
        users.length === 0 ? (
            res.json({
                status: 200,
                message: "success, No user left",
                data: users
            })
        ) : (
            res.json({
                status: 200,
                message: "success",
                data: users
            })
        )

    } else {
        res.json({
            status: 404,
            message: "no user present for given id"
        })
    }
});

router.post('/', addTimestamp, (req, res) => {
    const newUser = {
        id: Math.floor(Math.random() * 100000),
        ...req.body
    };
    users.push(newUser);
    res.json({
        status: 200,
        message: "success",
        data: newUser
    });
});

module.exports = router;