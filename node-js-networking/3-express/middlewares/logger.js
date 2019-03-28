function logger(req, res, next) {
    console.log(`${req.method} ${req.url} ${req.body && 'BODY:' + req.body}`);
    next();
}

module.exports = logger;