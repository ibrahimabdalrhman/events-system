const express = require('express');
const app = express();
const eventRoute = require('./routes/eventRoute');
const userRoute = require("./routes/userRoute");
const ejs = require("ejs");
const Event = require('./models/eventModel');
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require("passport");
const passportSetup = require('./config/passportSetup');


app.use(bodyParser.json());

app.use(session({
    secret: "lorem ipsum",
    saveUninitialized: false,
    cookie: { maxAge: 6000*15 },
    resave: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static("node_modules"));


// routing
app.use('/api/event', eventRoute);
app.use("/api/user", userRoute);

app.get('*', (req, res) => {
    res.send("ERROR 404 , can't find page")
});




module.exports = app;