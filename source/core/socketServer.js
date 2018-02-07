const io = require('socket.io')();

io.on('connection', socket => {
    socket.join('test', () => {
        io.to('test').emit('t', 'hello');
    });

    socket.on('r', data => {
        console.log(data)
    });
})

module.exports = io;
