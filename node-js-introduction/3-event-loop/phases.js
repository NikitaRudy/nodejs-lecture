const fs = require('fs');

// fs.readFile(__filename, () => {
//     setTimeout(() => console.log('timeout'), 0);
//     setImmediate(() => console.log('immediate'));
//     process.nextTick(() => console.log('next tick'));
// });

// setImmediate(() => {
//     setTimeout(() => console.log('timeout'), 0);
//     setImmediate(() => console.log('immediate'));
//     process.nextTick(() => console.log('next tick'));
// });

// setTimeout(() => {
//     setTimeout(() => console.log('timeout'), 0);
//     setImmediate(() => console.log('immediate'));
//     process.nextTick(() => console.log('next tick'));
// }, 0);