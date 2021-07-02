var HOST = location.origin.replace(/^http/, 'ws')

const socket = new WebSocket(HOST);

socket.onopen = () => {
    console.log("Conexão aberta!");
}

socket.onmessage = ({ data }) => {
    document.getElementById("mensagem").innerHTML = data.toString();
}