exports.authCheck = (users) => (req, res, next) => {
    console.log(users);
    const authUser = users.find(element => element.authToken === +req.cookies.token)
    console.log(authUser);
    console.log(req.cookies);
    if (authUser) {
        req.user = authUser;
        next();
    } else {
        res.status(403).send('Unauthorized');
    }

};

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
    setTimeout(() => next(), 300)
};