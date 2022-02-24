/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
const http = require('http');
const url = require('url');
const getInformation = require('./airportDataFinder');

const host = 'localhost';
const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Its working!');
      break;
    case '/ping':
      res.writeHead(200);
      res.end('Pong');
      break;
    case '/hello-json':
      res.writeHead(200);
      res.end(
        JSON.stringify({
          message: 'Hello this is json response',
        }),
      );
      break;
  }
  if ((req.url).startsWith('/airport-details')) {
    const queryObject = url.parse(req.url, true).query;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(JSON.stringify(getInformation(queryObject['airport-code'])));
  }
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});

module.exports = {
  requestHandler,
};
