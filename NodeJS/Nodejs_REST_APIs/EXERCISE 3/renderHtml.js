const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, (err, page) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(err.toString())
        } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page)
        }
        res.end();
    })
};

module.exports = {
    renderHTML
};