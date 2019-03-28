const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on(
        'data',
        data => console.log('request: ', data.toString())
    )
    
    const html = '<h1>hello world!!</h1>'
    socket.end(`HTTP/1.1 200 OK
Content-Length: ${html.length}
Content-Type: text/html

${html}`)
});

server.listen(8080, () => console.log('listening...'));