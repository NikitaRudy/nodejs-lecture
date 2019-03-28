const express = require('express');
const citiesRouter = require('./cities');

const router = express.Router();

router.use('/cities', citiesRouter);

module.exports = router;