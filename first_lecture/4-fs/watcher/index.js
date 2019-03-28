const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

function checkDirectory() {
    fs.readdir(this.directory, (err, dir) => {
        if (err) {
            console.log('error: ', err);
            return;
        }

        dir.forEach(fileName => {
            const pathToFile = path.join(this.directory, fileName);
            fs.readFile(pathToFile, 'utf-8', (err, file) => {
                if (err) {
                    console.log('error: ', err);
                    return;
                }

                const prevFileState = hash.get(pathToFile);

                if (file !== prevFileState) {
                    hash.set(pathToFile, file);
                    this.emit('CHANGE', pathToFile);
                }
            });
        });
    });
}

let intervalId;
const hash = new Map();

class Watcher extends EventEmitter {
    constructor(directory) {
        super();
        this.directory = directory;
    }

    start() {
        this.stop();
        intervalId = setInterval(checkDirectory.bind(this), 300);
    }

    stop() {
        clearInterval(intervalId);
    }
}

module.exports = Watcher;

const dirPath = path.join(__dirname, 'content');
const watcher = new Watcher(dirPath);
watcher.on('CHANGE', (fileP) => console.log('changes at', fileP));
watcher.start();