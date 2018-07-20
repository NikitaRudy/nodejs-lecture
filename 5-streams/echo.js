const stream = require('stream');

console.log(process.stdin instanceof stream.Writable);
console.log(process.stdout instanceof stream.Readable);

class ReverseTransformer extends stream.Transform {
    _transform(data, encoding, callback) {
        this.push(
            data.toString()
                .split('')
                .reverse()
                .join('')
                .concat('\n')
        )
        callback();
    }
}

const read = process.stdin;
const write = process.stdout;
const transform = new ReverseTransformer();

read.pipe(transform).pipe(write);