const mongoose = require('mongoose');
const {getUser} = require("./usersModel");
const {setUserModel, saveUserInDb, checkUser, findOrCreateUser} = require('./usersModel');

mongoose.connect('mongodb://localhost:27017/Authentication_Strategies', {
    useNewUrlParser: true
});

setUserModel(mongoose);

module.exports = {
    saveUser: saveUserInDb,
    checkUser,
    getUser,
    findOrCreateUser
};