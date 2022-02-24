 const http = require("http");
const host = "localhost";
const url = require('url');
const port = 3000;
const airportInformation = require('./airportDetails');


const requestHandler = (req, res) => {
  
  const queryObject = url.parse(req.url, true).query;

  const AirportObject = airportInformation.getAirportDetails(queryObject.code);
  res.end(JSON.stringify(AirportObject));
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});


/* const requestHandler = (req, res) => {
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
      res.end(JSON.stringify(airportInformation.getAirportDetails(airportCode['airport-code'])));
      break;
    default:
      res.writeHead(200);
      res.end('Server Working!');
  }
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}/airport-details`);
}); */
 
/* const requestHandler = (req, res) => {
  
  const queryObject = url.parse(req.url, true).query;

  const AirportObject = airportDetails.getAirportDetails(queryObject.code);
  res.end(JSON.stringify(AirportObject));
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
 */

/* 
const http = require('http');
const url = require('url');
const airport = require('./airportDetails');
const host = 'localhost';
const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject.code);
  console.log(typeof(queryObject.code));
  const airportDetails = airport.getAirportDetails(queryObject.code);
  console.log(airportDetails);
  res.end('Airport Details');
};

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
console.log(`Server started. Visit http://${host}:${port}`);
});
 */






















/* const server = http.createServer((req, res) => {
  const queries = url.parse(req.url, true).query;
  res.setHeader('Content-Type', 'text/plain');
  if ('code' in queries) {
    try {
      const airportDetails = airport.getAirportDetails(queries['code']);
      res.writeHead(200);
      res.end(JSON.stringify(airportDetails, null, '\t'));
    } catch (err) {
      res.writeHead(400);
      res.end(err.message);
    }
  }
});

server.listen(port, host, () => {
  console.log('Server started');
});
 */

/* const http = require("http");
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

/* const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
 */ 