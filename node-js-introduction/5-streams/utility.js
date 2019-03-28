const fs = require('fs')
const path = require('path');

const pathToFile = path.join(__dirname, 'bigfile.txt');

function generateFile(lines, cb) {
    let res = ''
    for (let i = 0; i < lines; i++) {
        res += 'Lorem ipsum '.repeat(5).concat('\n')
    }

    fs.writeFile(pathToFile, res, cb)
}

// const now = Date.now()
// generateFile(10 ** 6,
//     () => console.log('time: ', (Date.now() - now) / 1000, 'sec')
// )