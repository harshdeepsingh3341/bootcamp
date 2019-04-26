const http = require('http');
const axios = require('axios');

const __port = 8080;

async function getUserGithubApi() {
    let result = {};
    await (() => {
        return axios({
            method: "GET",
            url: "http://api.github.com/users/harshdeepsingh3341"
        }).then(response => {
            result = response.data;
        })
    })();
    console.log(result);

    return result;
}

http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/': {
            res.writeHead(200, {"Content-Type": "application/json"});
            getUserGithubApi().then((response) => {
                console.log(response);

                res.write(JSON.stringify(
                    {...response}
                ));
                res.end();
            });

            break;
        }
        default: {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.write(JSON.stringify({
                status: 404,
                message: "Page not found"
            }));
            res.end();
            break;
        }
    }
}).listen(__port, () => {
    console.log(`Server is running on http://localhost:${__port}`);
});