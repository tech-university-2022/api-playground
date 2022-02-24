const http = require('http');
const url = require('url');
const airportFinder = require('./src/airportInfoFinder');

const host = 'localhost';
const port = 3000;

const requestHandler = (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  console.log(queryObject['airport-finder?airport-code']);
  if (queryObject) {
    try {
      const airportInformation = airportFinder(queryObject['airport-finder?airport-code']);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(airportInformation));
    } catch (err) {
      res.writeHead(400);
      res.end(err.message);
    }
  }
};

const server = http.createServer(requestHandler);
server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
