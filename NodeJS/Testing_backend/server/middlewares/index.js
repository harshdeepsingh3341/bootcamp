const {
    addDelayMiddleware,
    allowCrossOriginMiddleware,
    loggerMiddleWare,
    pageErrorMiddleware,
    defaultErrorHandler
} = require("./utils");

module.exports = {
    loggerMiddleWare,
    allowCrossOriginMiddleware,
    addDelayMiddleware,
    pageErrorMiddleware,
    defaultErrorHandler
};