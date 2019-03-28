const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);
const writefile = promisify(fs.writeFile);

async function bundleCss(pathToDir) {
    const dir = await readdir(pathToDir);

    const files = await Promise.all(
        dir.map(
            fileName => readfile(path.join(pathToDir, fileName))
        )
    );

    const bundle = files.reduce(
        (result, file, i) => result
            .concat(`\n/* module: ${path.join(pathToDir, dir[i])} */\n`)
            .concat(file),
        '/* #### CSS BUNDLER #### */\n'
    );

    await writefile(path.join(__dirname, 'dist', 'bundle.css'), bundle);
}

bundleCss(path.join(__dirname, 'src'))
    .then(() => console.log('done'))
    .catch(err => console.log('error: ', err));