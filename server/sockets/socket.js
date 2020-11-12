const { io } = require('../server')

io.on('connection', (client) => {

    client.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a esta aplicación"
    })

    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar el cliente
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
    })

})