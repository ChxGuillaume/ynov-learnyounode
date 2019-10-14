const http = require('http');
const bl = require('bl');

http.get(process.argv[2], res => {
    res.setEncoding('utf8');

    let data = '';
    res.on('data', (chunk) => data += chunk);

    res.pipe(bl(function (err, data) {
        console.log(data.length);
    }));

    res.on('end', () => {
        console.log(data);
    });
});