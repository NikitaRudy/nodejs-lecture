const fs = require('fs');
const path = require('path');

const readable = fs.createReadStream(pathToFile, {
    highWaterMark: 64 * 1024
});

let counter = 0;
readable.on('data', (data) => {
    console.log(data.toString());
    counter++;
});

readable.on('end', () => {
    console.log('data was emitted', counter, 'times');
})