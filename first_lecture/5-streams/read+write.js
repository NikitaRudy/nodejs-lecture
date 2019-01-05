const stream = require('stream');
const fs = require('fs');
const path = require('path');

const pathToBigFile = path.join(__dirname, 'bigfile.txt');

let lines = 10 ** 6;
const read = new stream.Readable({
    read() {
        const str = 'Lorem Ipsum '.repeat(5).concat('\n');
        this.push(str);
        if (lines-- <= 0) {
            this.push(null);
        }
    }
})
const write = fs.createWriteStream(pathToBigFile);

const start = Date.now();
read.pipe(write).on('finish',
    () => console.log('time: ', (Date.now() - start) / 1000, 'sec')
)