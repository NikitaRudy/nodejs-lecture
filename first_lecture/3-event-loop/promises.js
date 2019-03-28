const fs = require('fs');

// fs.readFile(__filename, () => {
//     setTimeout(() => console.log('timeout'), 0);
//     setImmediate(() => console.log('immediate'));
//     Promise.resolve().then(() => console.log('promise'));
//     process.nextTick(() => console.log('next tick'));
// });

// setImmediate(() => {
//     setTimeout(() => console.log('timeout'), 0);
//     setImmediate(() => console.log('immediate'));
//     process.nextTick(() => console.log('next tick'));
//     Promise.resolve().then(() => console.log('promise'));
// });

// setTimeout(() => {
//     setTimeout(() => console.log('timeout'), 0);
//     setImmediate(() => console.log('immediate'));
//     process.nextTick(() => console.log('next tick'));
//     Promise.resolve().then(() => console.log('promise'));
// }, 0);