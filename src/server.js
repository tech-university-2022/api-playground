const http = require('http');
const url = require('url');
const airportInfo = require('./airportDetailsRetriever');

const host = 'localhost';
const port = 3000;
let airportCode;
const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Server Working!');
      break;
    case '/airport-details':
      res.writeHead(200);
      res.end('Enter airport code as a query in the url');
      break;
    case '/airport-details?airport-code=DEL':
      airportCode = url.parse(req.url, true).query;
      console.log(airportCode['airport-code']);
      res.writeHead(200);
      res.end(JSON.stringify(airportInfo.getAirportInformation(airportCode['airport-code'])));
      break;
    default:
      res.writeHead(200);
      res.end('Server Working!');
  }
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}/airport-details`);
});
module.exports = {
  requestHandler,
};
