const net = require('net');

const server = net.createServer();
server.on('connection', (socket) => {
    socket.pipe(socket);
    socket.on('close', () => {
        console.log('client disconnected');
    });
});
server.listen(8080);

const client = net.createConnection(8080);
client.on('data', (data) => {
    console.log('server responded: ', data.toString());
});

client.write('Hello server!');
client.end('Bye server!');
