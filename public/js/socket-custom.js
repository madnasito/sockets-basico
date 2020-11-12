let socket = io();

socket.on("connect", function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
})

//Los emits son para enviar informacion
socket.emit("enviarMensaje", {
    usuario: "Fernando",
    mensaje: "Hola mundo"
}, (resp) => {
    console.log("Respuesta server:", resp);

})

socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje)
})