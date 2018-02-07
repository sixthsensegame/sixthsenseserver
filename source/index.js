const socketServer = require('./core/socketServer.js');
module.exports = class server {
    constructor(config) {
        this.port = config.port;
        this.server = socketServer;
    }

    launch() {
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}!`);
    }
};


const ioclient = require('socket.io-client');
const client = ioclient('http://localhost')
client.on('t', data => {
      console.log(data)
})
client.emit('r', 'hi')
