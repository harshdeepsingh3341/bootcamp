const passport = require('passport');
const {findOrCreateOAuthUser} = require("../../services/userService");

const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
    passport.use(new FacebookStrategy({
            clientID: '2147021578727140',
            clientSecret: 'f2f99b8b281cfc73727fae4c671499e4',
            callbackURL: 'http://localhost:8080/callback/facebook',
            profileFields: ['id', 'name', 'displayName']
        }, (accessToken, refreshToken, profile, done) => {
            console.log('profile', profile);
            findOrCreateOAuthUser({
                facebook_id: profile.id,
                name: profile.displayName,
                provider: profile.provider
            }).then(response => {
                done(null, response.user);
            }).catch(response => {
                done(response);
            })
        }
    ));
};