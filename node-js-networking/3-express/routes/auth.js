const express = require('express');
const authControllers = require('../controllers/auth');

const router = express.Router();

router.post('/', (req, res) => {
    authControllers.login(req.body.name, req.body.password)
        .then(token => res.end(token))
        .catch(err => {
            res.status(403);
            res.end(err);
        });
});

module.exports = router;