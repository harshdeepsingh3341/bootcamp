const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const {todoGroupController, todoController} = require("./controllers");
const {
    loggerMiddleWare,
    allowCrossOriginMiddleware,
    addDelayMiddleware,
    pageErrorMiddleware,
    defaultErrorHandler
} = require("./middlewares");

const __port = 8080;

const app = express();

app.use(bodyParser.urlencoded({
        extended: true
    })
);
app.use(expressSession({
    secret: "Hello HD!",
    saveUninitialized: true,
    resave: true
}));

app.use('/', loggerMiddleWare, allowCrossOriginMiddleware, addDelayMiddleware);

app.use('/todoGroup', todoGroupController);

app.use('/todo', todoController);

app.use(pageErrorMiddleware, defaultErrorHandler);

app.listen(__port, () => {
    console.log(`Server is running on http://localhost:${__port}/`);
});