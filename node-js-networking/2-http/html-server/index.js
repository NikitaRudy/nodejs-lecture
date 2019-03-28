const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (request, response) => {
    const readstream = fs.createReadStream(path.join(__dirname, 'index.html'));
    readstream.pipe(response);
});

server.listen(8080);