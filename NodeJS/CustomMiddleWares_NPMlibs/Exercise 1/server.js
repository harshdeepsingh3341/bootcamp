const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');
const cookieParser = require('cookie-parser');
const {addDelayMiddleware} = require("./middlewares");
const {allowCrossOriginMiddleware} = require("./middlewares");
const {loggerMiddleWare} = require("./middlewares");

const app = express();
const _port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use('/', allowCrossOriginMiddleware, loggerMiddleWare, addDelayMiddleware);

app.listen(_port, () => console.log(`Server running at http://localhost:${_port}/`));

app.use('/user', router);