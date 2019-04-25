const {checkUser} = require("../../mongo");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            console.log('local');

            checkUser(email, password).then(response => {
                response.isUserMatch ? (
                    done(null, response.user)
                ) : (
                    done(null, false, {status: 404, message: 'User not found'})
                )
            }).catch(response => {
                response.isUserMatch ? (
                    done(null, false, {status: 404, message: 'User not found'})
                ) : (
                    done(err)
                )
            })
        })
    )
};