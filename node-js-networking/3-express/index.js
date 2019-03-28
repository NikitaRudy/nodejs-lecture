const express = require('express');
const path = require('path');
const fs = require('fs');
const router = require('./routes');
const jsonBodyParser = require('./middlewares/jsonBodyParser');
const { errorMiddleware } = require('./middlewares');
const logger = require('./middlewares/logger');

const app = express();

app.use(jsonBodyParser);
app.use(logger);
app.use(router);
app.use(errorMiddleware);

app.listen(8080, () => console.log('listening...'));