const express = require('express');
const path = require('path');
const {allowCrossOriginMiddleware, loggerMiddleWare, addDelayMiddleware} = require("./middlewares");
const {router, users, callbacks} = require('./controller');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');

const app = express();

const __port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressSession(
    {
        secret: "My name is HD!",
        resave: false,
        saveUninitialized: false
    }
))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', allowCrossOriginMiddleware, loggerMiddleWare, addDelayMiddleware);

app.use('/', router);
app.use('/user', users);
app.use('/callback' ,callbacks);

app.use((req, res, next) => {
    next(new Error("404 Page not found"))
});

app.use((err, req, res, next) => {
    res.render('error', {title: "Error", err: err})
});

app.listen(__port, () => {
    console.log(`Server is running on http://localhost/${__port}`);
});
