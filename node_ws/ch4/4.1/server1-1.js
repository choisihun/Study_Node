const http = require("http");
const fs = require("fs").promises;


// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   res.write("<h1>Hello Node!</h1>");
//   res.end("<p>Hello server!</p>");
// });

// server.listen(8080);

// server.on("listening", () => {
//   console.log("8080인 포트에서 서버 시작");
// });

// server.on("error", (error) => {
//   console.error(error);
// });

http
  .createServer(async (req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1>Hello Node 81</h1>");
        res.end("<p>Hello server!</p>");
      } else if (req.url === "/server2") {
        try {
          console.log(req.method);
          console.log(req.url);

          const data = await fs.readFile("./server.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(data);
        } catch (err) {
          console.error(err);
          res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
          res.end(err.message);
        }
      }
    }
  })
  .listen(8080, () => {
    console.log("8080에서 시작");
  });


