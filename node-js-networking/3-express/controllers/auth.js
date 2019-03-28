const fs = require('fs');
const path = require('path');
const util = require('util');
const { secretToken } = require('../config');

const readfile = util.promisify(fs.readFile);

const pathToAdmins = path.join(__dirname, '../data/admins.json');

const checkCreds = (admin, name, password) => console.log(admin, name, password) || 
    admin.name === name && admin.password === password

function login(name, password) {
    return readfile(pathToAdmins)
        .then(JSON.parse)
        .then(admins => {
            const isAdmin = !!admins.find(admin => checkCreds(admin, name, password));

            return isAdmin
                ? secretToken
                : Promise.reject('ask admin to provide you an access');
        })
}

module.exports = {
    login,
};