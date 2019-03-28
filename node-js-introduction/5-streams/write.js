const fs = require('fs');
const path = require('path');

const pathToBigFile = path.join(__dirname, 'bigfile.txt');


function generateFile(lines, cb) {
    const writable = fs.createWriteStream(pathToBigFile);
    const str = 'Lorem Ipsum '.repeat(5).concat('\n');

    writable.on('close', cb);

    function start(n) {
        if (n === 0) {
            writable.end('last line');
            return;
        }

        writeToStream(writable, str, () => start(n - 1));
    }

    start(lines);
}

function writeToStream(stream, chunk, cb) {
    const isFull = !stream.write(chunk);

    if (isFull) {
        stream.once('drain', cb);
    } else {
        process.nextTick(cb);
    }
}

const now = Date.now();
generateFile(10 ** 6,
    () => console.log('time: ', (Date.now() - now) / 1000, 'sec')
)
