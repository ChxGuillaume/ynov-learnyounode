const fs = require('fs');
const fileName = process.argv[2];
const dataBuffer = fs.readFile(fileName, (err, dataBuffer) => {
    let data = dataBuffer.toString();

    console.log(data.split('\n').length - 1);
});
