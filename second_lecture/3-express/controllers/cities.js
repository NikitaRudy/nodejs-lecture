const fs = require('fs');
const util = require('util');
const path = require('path');

const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

const citiesPath = path.join(__dirname, '../data/cities.json');


function getCities() {
    return readfile(citiesPath)
        .then(JSON.parse);
}

function getCity(id) {
    return getCities()
        .then(cities => cities.find(city => city.id === id))
}

function saveCities(cities) {
    return writefile(citiesPath, JSON.stringify(cities));
}

function saveCity(city) {
    return getCities()
        .then(cities => {
            const id = cities[cities.length - 1].id + 1;
            const cityWithId = Object.assign({}, city, { id });
            const newCities = cities.concat(cityWithId);
            
            return saveCities(newCities);
        })
}

module.exports = {
    getCity,
    getCities,
    saveCity,
    saveCities,
}