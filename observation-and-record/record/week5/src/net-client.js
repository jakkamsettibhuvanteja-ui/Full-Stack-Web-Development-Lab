const net = require('net');

const client = net.createConnection({
    port: 3000,
    host: 'localhost'
}, () => {

    console.log('Connected to server.');

    client.write('Hello from the client!');

});

client.on('data', (data) => {

    console.log('Received from server:', data.toString());

    client.end();

});

client.on('end', () => {

    console.log('Disconnected from server.');

});