const express = require('express');
const path = require('path');
const fs = require('fs');

const usersControllers = require('./controllers/users');
const { errorMiddleware } = require('./middlewares');

const app = express();

app.get('/api/users', (req, res) => {
    usersControllers.getUsers()
        .then(users => res.json(users))
        .catch(err => {
            res.status(404);
            res.end('not found');
        })
});

app.get('/api/users/:id', (req, res) => {
    usersControllers.getUser(req.params.id)
        .then(user => res.json(user))
        .catch(err => {
            res.status(404);
            res.end('not found');
        });
});

app.use(errorMiddleware);

app.listen(8080, () => console.log('listening...'));