class Sockets {

    constructor( io ) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // ON connection
        this.io.on('connection', ( socket ) => { 

            // Escuchar evento del cliente
            socket.on('mensaje-to-server', (data) => {
                console.log(data)
        
                this.io.emit('mensaje-from-server', data);
            });
        
        });
    }

}

module.exports = Sockets;