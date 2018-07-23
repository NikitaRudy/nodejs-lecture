const http = require('http');
const fs = require('fs');
const path = require('path');

const { createDirTemplate } = require('./helpers');

const server = http.createServer();

server.on('request', (request, response) => {
    const requestedUrl = path.join(__dirname, request.url);

    fs.stat(requestedUrl, (err, stats) => {
        if (!stats) {
            response.end(`${requestedUrl} does not exists`);
        } else if (!stats.isDirectory()) {
            const readable = fs.createReadStream(requestedUrl);
            readable.pipe(response);
        } else {
            fs.readdir(requestedUrl, (err, dir) => {
                response.end(createDirTemplate(dir, requestedUrl));
            })
        }
    });

});

server.listen(8080);