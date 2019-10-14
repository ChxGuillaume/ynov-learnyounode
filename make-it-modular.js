const mymodule = require('./mymodule');
const dirName = process.argv[2];
const extension = process.argv[3];

mymodule(dirName, extension, (err, files) => {
    files.forEach(f => console.log(f));
});