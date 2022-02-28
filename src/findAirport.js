const http = require('http');
const url = require('url');
const airports = require('./airportDetails');

const host = 'localhost';
const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const airportCode = url.parse(req.url, true).query;

  if (url.parse(req.url, true).pathname === '/airport-details') {
    if (airportCode !== null) {
      const airportDetails = airports.getAirportInfo(airportCode['airport-code']);
      res.writeHead(200);
      res.end(JSON.stringify(airportDetails));
    }
  }
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
