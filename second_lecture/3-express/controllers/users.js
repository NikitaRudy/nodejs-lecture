const fs = require('fs');
const util = require('util');
const path = require('path');

const readfile = util.promisify(fs.readFile);

const usersPath = path.join(__dirname, './data/users.json');


function getUsers() {
    return readfile(usersPath)
        .then(JSON.parse);
}

function getUser(id) {
    return getUsers()
        .then(users => users.find(user => user.id === id))
}

module.exports = {
    getUser,
    getUsers,
}