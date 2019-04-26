const http = require('http');
const childProcess = require('child_process');

const __port = 8080;
http.createServer((req, res) => {
    switch (req.url) {
        case '/execFile': {
            childProcess.execFile('./execFile.sh', (error, stdout, stderr) => {
                if (error) {
                    throw error;
                }
                res.writeHead(200, {'Content-Type': 'text/html'});

                console.log(stdout);
                console.log(typeof stdout, typeof stderr);

                res.write(JSON.stringify(stdout));
                res.end();
            });
            break;
        }
        case '/spawn' : {
            let child = childProcess.spawn('ls', ['-a', '-l']);

            (async function () {
                let data = '';
                for await (const i of child.stdout) {
                    data += i;
                }
                return data;
            })().then(response => {
                console.log(response);
            });
            break;
        }
        default: {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.write(JSON.stringify({
                status: 404,
                message: "Page not found!"
            }));
            res.end();
        }
    }
})
    .listen(__port, () => {
        console.log(`Server is running on http://localhost:${__port}/`);
    });