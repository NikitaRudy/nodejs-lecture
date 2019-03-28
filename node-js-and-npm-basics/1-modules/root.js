const config = require('./config');
const helpers = require('./helpers');
const { log } = require('./utils');
const someModule = require('./directory-as-module');
const cities = require('./cities');


someModule.init()

log(config.apiKey);
log(config.user);

const result1 = helpers.sum(1, 2);
const result2 = helpers.mul(2, 3);

log(`sum is ${result1}`);
log(`mul is ${result2}`);

log(cities)



