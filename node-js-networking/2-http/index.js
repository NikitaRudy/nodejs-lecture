const http = require('http');
const stream = require('stream');

const server = http.createServer();

server.on('request', (request, response) => {
    console.log(request instanceof stream.Readable);
    console.log(response instanceof stream.Writable);
})

server.listen(8080);