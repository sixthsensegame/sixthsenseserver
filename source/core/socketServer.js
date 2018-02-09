const io = require('socket.io');
module.exports = class socketServer {
    constructor(config) {
        this.config = config;
        this.server = io();

        this.lobby = [];
    }

    init() {
        this.server.listen(this.config.port)
        this.listen();
    }

    listen() {
        this.server.on('connection', socket => {
            socket.join('lobby', () => {
                this.lobby.push(socket);
                this.server.to('lobby').emit('t', 'hello');
            });

            socket.on('disconnect', data => {
                socket.join('lobby', () => {
                    this.server.to('test').emit('t', 'goodbye');
                });
                this.lobby.splice(this.lobby.indexOf(socket), 1);
            });

            socket.on('r', data => {
                console.log(data)
            });
        })
    }

    broadcastTo(room, event, data) {
        this.server.to(room).emit(event, data);
    }
}
