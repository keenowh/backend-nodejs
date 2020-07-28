const http = require("http");

const port = process.env.PORT || 3000;

const app = require("./app");
const server = http.createServer(app);

// DATABASE

server.listen(port, function () {
  console.log("Server started at port 3000");
});