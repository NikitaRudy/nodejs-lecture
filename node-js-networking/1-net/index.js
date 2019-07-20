const net = require('net');

const server = net.createServer();
server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log('message from client: ', data.toString());
    });

    socket.end('hello client!');
})
server.listen(8080, () => {
    console.log(server.address());
})


const client = net.createConnection(8080, () => {
    client.write('hello server!');
})

client.on('data', (data) => {
    console.log('server responded with: ', data.toString());
})