const http = require('http');
const url = require('url');
const airport = require('../src/airportDetailsRetriever');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const queries = url.parse(req.url, true).query;
  
  if ('airport-code' in queries) {
    try {
      const airportDetails = airport.getDetails(queries['airport-code']);
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(JSON.stringify(airportDetails, null, '\t'));
    } catch (err) {
      res.writeHead(400);
      res.setHeader('Content-Type', 'text/plain');
      res.end(err.message);
    }
  }
});

server.listen(port, host, () => {
  console.log('Server started');
});
