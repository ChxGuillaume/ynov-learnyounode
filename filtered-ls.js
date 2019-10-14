const fs = require('fs');
const dirName = process.argv[2];
const extension = process.argv[3];

fs.readdir(dirName, ((err, files) => {
    files.filter(f => f.match(new RegExp(`.*\\.${extension}`))).forEach(f => console.log(f));
}));