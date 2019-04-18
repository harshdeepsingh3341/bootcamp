const http = require('http');
const {readFileASync, readFileSync} = require('./readingFile');

const __port = 8000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    /*res.write('Async read file starts <br>');
    readFileASync((err, data) => {
        err ? res.write(err) : res.write(data);
        res.end();
    });
    res.write('<br>Async read file stops <br>');*/

    res.write('sync read file starts <br>');
    res.write(readFileSync());
    res.write('<br>sync read file stops <br>');
    res.end();

}).listen(__port, () => console.log(`Server is listening to ${__port}`));