const http = require('http');
const url = require('url');

const students = require('./public/students');
const {getAllStudents, searchStudents, filterStudents, getBranches} = require('./StudentsOp');
const __port = 8000;

http.createServer((req, res) => {
    const {method} = req;
    const curr_url = url.parse(req.url, true);
    console.log(curr_url, curr_url.query);

    switch (curr_url.pathname) {
        case '/students':
            res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
            console.log(Array.isArray(students));
            if (curr_url.query.q) {
                res.write(searchStudents(curr_url.query.q));
            } else if (curr_url.query.b) {
                res.write(filterStudents(curr_url.query.b))
            } else {
                res.write(getAllStudents());
            }
            res.end();
            break;
        case '/branches':
            res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"})
            res.write(getBranches());
            res.end();
            break;
        default:
            res.writeHead(404, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
            res.write(JSON.stringify(
                {
                    status: 404,
                    message: "no route found",
                    data: null
                }
            ));
            res.end();
    }
})
    .listen(__port, () => console.log(`Server is started on ${__port}`));