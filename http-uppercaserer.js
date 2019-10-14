const http = require('http');
const map = require('through2-map');
const [node, path, port] = process.argv;

const server = http.createServer((req, res) => {
    req.pipe(map((chuck) => {
        return chuck.toString().toUpperCase();
    })).pipe(res);
}).listen(port);
