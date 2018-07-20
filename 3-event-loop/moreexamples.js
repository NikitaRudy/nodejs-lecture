const fs = require('fs');

fs.readFile(__filename, () => {
    setImmediate(() => {
        Promise.resolve().then(() => console.log('promise'));
        process.nextTick(() => console.log('next tick'));
    })
    setImmediate(() => console.log('immediate'));
});