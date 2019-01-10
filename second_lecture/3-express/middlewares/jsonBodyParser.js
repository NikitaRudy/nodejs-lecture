function jsonBodyParser(req, res, next) {
    const contentType = req.headers['content-type'];
    const isJson = contentType === 'application/json';

    let result = '';

    req.on('data', data => {
        result += data.toString();
    });
    req.on('end', () => {
        req.body = isJson ? JSON.parse(result) : result;
        next();
    });
}

module.exports = jsonBodyParser;