const http = require('http');
const fs = require('fs');
const [node, path, port, file] = process.argv;

const server = http.createServer((req, res) => {
    fs.createReadStream(file).pipe(res);
}).listen(port);
