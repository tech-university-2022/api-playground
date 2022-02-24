const http = require("http");
const host = "localhost";
const port = 3000;

const requestHandler = (req, res) => {
  res.end("Hello");
};

/*
const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};


const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end("Its working!");
      break;
    case "/ping":
      res.writeHead(200);
      res.end("Pong");
      break;
    case "/hello-json":
      res.writeHead(200);
      res.end(
        JSON.stringify({
          message: "Hello this is json response",
        })
      );
      break;
  }
};
*/

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
