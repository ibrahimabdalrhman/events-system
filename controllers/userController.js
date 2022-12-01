const passport = require('passport');
const User = require('../models/userModel');



exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json({
        status: 'success',
        length: users.length,
        data: {
            users
        }
    })
};



exports.login = async (req, res) => {
    console.log('logging in...');
    console.log('username : ',req.body.username);
    console.log('password : ',req.body.password);
    
};

exports.signup = async (req, res) => {
    console.log("sign up ...");
    console.log("username : ", req.body.username);
    console.log("password : ", req.body.password);
    passport.authenticate('local.signup', {
        successRedirect: '/api/user/profile',
        failureRedirect: '/api/user/signup',
        failureFlash: true
    });
}
