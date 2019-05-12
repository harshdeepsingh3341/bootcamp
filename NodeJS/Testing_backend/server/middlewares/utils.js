exports.loggerMiddleWare = (req, res, next) => {
    console.log(`request received on ${req.url}, with method ${req.method}`);
    next();
};
exports.allowCrossOriginMiddleware = (req, res, next) => {
    console.log('cors');

    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
};

exports.addDelayMiddleware = (req, res, next) => {
    setTimeout(() => next(), 100)
};

exports.pageErrorMiddleware = (req, res, next) => {
    req.status = 404;
    next(new Error("404 Page not found"))
};

exports.defaultErrorHandler = (err, req, res, next) => {
    res.status(req.status || 500);
    res.message = err.message;
    res.send({
        status: req.status,
        message: err.message,
        stack: err.stack
    });
};
