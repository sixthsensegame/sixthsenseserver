const socketServer = require('./core/socketServer.js');
module.exports = class server {
    constructor(config) {
        this.config = config;
        this.server = new socketServer(config);
    }

    launch() {
        this.server.init();
        console.log(`Server listening on port ${this.config.port}!`);
        setTimeout(()=>this.server.broadcastTo('lobby', 't', 'Hello this is the server!'), 1000)
    }
};


const ioclient = require('socket.io-client');
const client = ioclient('http://localhost')
client.on('t', data => {
      console.log(data)
})
client.emit('r', 'hi')
