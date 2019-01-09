function errorMiddleware(err, req, res, next) {
    res.status(500);
    res.end(err.message);
}

module.exports = {
    errorMiddleware,
}