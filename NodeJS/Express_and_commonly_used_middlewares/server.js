const express = require('express');
const path = require('path');
const router = require('./router/index');
const bodyParser = require('body-parser');

const app = express();
const __port = 8080;

const loggerMiddleWare = (req, res, next) => {
    console.log(`request received on ${req.url}, with method ${req.method}`);
    next();
};
const allowCrossOriginMiddleware = (req, res, next) => {
    console.log('cors');

    res.header("Access-Control-Allow-Origin", "*");
    next();
};

const addDelayMiddleware = (req,res,next) => {
    setTimeout(() => next(), 300)
}

app.use('/', express.static(path.join(__dirname, 'static', 'react_app', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', addDelayMiddleware, allowCrossOriginMiddleware, loggerMiddleWare);
app.use('/users', router);

app.all("*",(req,res) => {
    res.redirect('/')
});

app.listen(__port, () => console.log(`Server is running on ${__port}`));