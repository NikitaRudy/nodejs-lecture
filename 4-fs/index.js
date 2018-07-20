const fs = require('fs');
const path = require('path');

fs.readFile(__filename, 'utf-8', (err, file) => {
    if (err) {
        console.log('error: ', err);
        return
    }
    console.log(file);
});
const file = fs.readFileSync(__filename, 'utf-8');
console.log(file);

fs.writeFile(path.join(__dirname, './1.txt'), 'Hello\nWorld\n!', (err) => {
    if (err) {
        console.log('error: ', err);
        return
    }
    console.log('done!');
});

fs.readdir(__dirname, (err, dir) => {
    console.log(dir);
});