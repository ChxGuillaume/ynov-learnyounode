const http = require('http');
const bl = require('bl');
const [node, path, ...urls] = process.argv;
let index = 0;

async function request(url) {
    return new Promise((resolve, reject) => {
        http.get(url, ((res) => {
            const {statusCode} = res;
            if (statusCode !== 200) reject();

            res.setEncoding('utf8');

            let data = '';
            res.on('data', (chunk) => data += chunk);

            res.pipe(bl(function (err, data) {
                console.log(data.toString());
                resolve();
            }));
        }));
    });
}

function exec() {
    if (urls[index]) request(urls[index++]).then(exec);
}

exec();