const fs = require('fs');
const path = require('path');

/* FILE */
fs.readFile(__filename, 'utf-8', (err, file) => {
    if (err) {
        console.log('error: ', err);
        return
    }
    console.log('async readFile', file.length);
});

const file = fs.readFileSync(__filename, 'utf-8');
console.log('sync readFile', file.length);


/* DIRECTORY */
fs.readdir(__dirname, (err, dir) => {
  console.log('async dir', dir);
});

const dir = fs.readdirSync(__dirname)
console.log('sync readdir', dir)