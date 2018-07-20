const stream = require('stream');
const fs = require('fs');
const path = require('path');

const pathToRead = path.join(__dirname, 'bigfile.txt');
const pathToWrite = path.join(__dirname, 'bigfile_upper_case.txt');

class UpperCaseTransformer extends stream.Transform {
    _transform(data, encoding, callback) {
        this.push(data.toString().toUpperCase())
        callback();
    }
}

const read = fs.createReadStream(pathToRead);
const transform = new UpperCaseTransformer();
const write = fs.createWriteStream(pathToWrite);

read.pipe(transform).pipe(write);