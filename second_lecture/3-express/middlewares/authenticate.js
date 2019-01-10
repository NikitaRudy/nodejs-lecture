const { secretToken } = require('../config');

function authenticate(req, res, next) {
    if (req.query.token !== secretToken) {
        res.status(403);
        res.end('forbidden');
    } else {
        next();
    }
}

module.exports = authenticate;