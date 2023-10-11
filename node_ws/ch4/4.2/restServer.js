const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async(req, res) => {
try {
    if(req.method ==='GET') {
        if(req.url==='/') {
            const data = await fs.readFile('./restFront.html');
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            return res.end(data);
        }
    } else if(req.method==='post') {

    } else if(req.method==='put') {

    } else if(req.method==='DELETE') {

    }
    res.writeHead(404);
    return res.end('NOT FOUND');
} catch(err) {
    console.error(err);
}
})

.listen(8081, () => {
        console.log("8081에서 시작");
      });