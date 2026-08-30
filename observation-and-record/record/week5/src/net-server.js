const net = require('net');

const server = net.createServer((socket) => {

    console.log('Client connected.');

    socket.write('Hello from the server!');

    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });

});

server.listen(3000, () => {

    console.log('Server listening on port 3000.');

});