

const data = require("./data");
const http = require("http");
const hostname = "localhost";
const port = 3035;

http
  .createServer(function (req, res) {
    res.write("Response goes in here...");
    res.end();
  })
  .listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
