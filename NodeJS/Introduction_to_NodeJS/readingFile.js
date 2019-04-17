const fs = require('fs');

const readFileASync = (callback) => {
    fs.readFile('./users.json', 'utf8', callback);
};

const readFileSync = () => {
    return fs.readFileSync('./users.json', 'utf8');
};

module.exports = {
    readFileASync,
    readFileSync
};