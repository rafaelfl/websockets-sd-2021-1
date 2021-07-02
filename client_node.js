const ws = require('ws');

const socket = new ws("ws://127.0.0.1:8080");

socket.on("open", () => {
    socket.send("Olá!");
});

socket.on("message", (data) => {
    console.log(" >>>> msg recebida: " + data.toString());

    socket.close();
});