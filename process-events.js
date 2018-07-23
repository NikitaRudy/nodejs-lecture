process.on('exit', () => {
    console.log('Process is about to exit!');
})

const start = Date.now();

while (Date.now() - start < 1000) {
    ;
}