const http = require('http');
const __port = 8000;
const {renderHTML} = require('./renderHtml');

http.createServer((req, res) => {
    const {url, method} = req;

    switch (url) {
        case '/':
            renderHTML('./public/index.html', res);
            break;
        case '/about':
            renderHTML('./public/about.html', res);
            break;
        case '/contact-us':
            renderHTML('./public/contact-us.html', res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("404 not found");
            res.end();
    }

})
    .listen(__port, () => console.log(`Server is running on ${__port}`));