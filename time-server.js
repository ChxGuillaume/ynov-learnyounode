const net = require('net');
const [node, path, port] = process.argv;

net.createServer(socket => {
    socket.setEncoding('utf8');

    socket.write(getFormattedDate());
    socket.end();
}).listen(port);

function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
}

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}