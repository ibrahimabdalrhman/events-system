const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/userModel');

passport.use('local.signup', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    if (req.body.password != req.body.confirmPassword) {

        return console.log('error in password');
    }
}
));

