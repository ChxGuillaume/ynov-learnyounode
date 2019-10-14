const fs = require('fs');

module.exports = (dName, extName, callback) => {
    fs.readdir(dName, ((err, files) => {
        if (err) {
            return callback(err);
        }

        callback(err, files.filter(f => f.match(new RegExp(`.*\\.${extName}`))));
    }));
};