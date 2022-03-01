const http = require('http');
const url = require('url');
const { getAirportDetails } = require('./airportDetailsGetter.js');

const host = 'localhost';
const port = 3000;

const requestHandler = (request, response) => {
  if (request.url.includes('?')) {
    const queryObject = url.parse(request.url, true).query;
    let { airportCode } = queryObject;
    airportCode = airportCode.toString();
    response.setHeader('Content-Type', 'application/json');
    try {
      response.end(JSON.stringify(getAirportDetails(airportCode)));
    } catch (err) {
      response.end(err.message);
    }
  } else {
    response.setHeader('Content-Type', 'text/html');
    response.end('Welcome to the airport details getter!');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
