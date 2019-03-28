const fs = require('fs');
const path = require('path');

const pathToRead = path.join(__dirname, 'bigfile.txt');
const pathToWrite = path.join(__dirname, 'bigfile_copy.txt');

const readable = fs.createReadStream(pathToRead);
const writable = fs.createWriteStream(pathToWrite);

const stream = readable.pipe(writable);

stream.on('close', () => {
    console.log('done!');
})


