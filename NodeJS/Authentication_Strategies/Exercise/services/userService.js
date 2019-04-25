const {saveUser, getUser: getUserFromDb, findOrCreateUser} = require("../mongo");

exports.signUpUser = user => saveUser(user);

exports.getUser = id => getUserFromDb(id);

exports.findOrCreateOAuthUser = user => findOrCreateUser(user);