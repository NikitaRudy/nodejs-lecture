const express = require('express');
const citiesControllers = require('../controllers/cities');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', (req, res) => {
    citiesControllers.getCities()
        .then(cities => res.json(cities))
        .catch(err => {
            console.log(err);
            res.status(404);
            res.end('not found');
        })
});

router.get('/:id', (req, res) => {
    citiesControllers.getCity(req.params.id)
        .then(city => res.json(city))
        .catch(err => {
            res.status(404);
            res.end('not found');
        });
});

router.post('/', authenticate, (req, res) => {
    citiesControllers.saveCity(req.body)
        .then(() => res.end('saved!'))
        .catch(err => {
            console.log(err);
            res.status(500);
            res.end('failed');
        });
});

module.exports = router;