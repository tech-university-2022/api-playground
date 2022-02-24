// Request url
// http://localhost:3000/airport-details?airport-code=DEL

const {airportDataProvider} = require('../src/airportDataProvider');

const http = require("http");
const url = require('url');

const host = "localhost";
const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const queryObject = url.parse(req.url, true).query;
  
  res.writeHead(200);
  const airportCode = queryObject['airport-code'];
  res.end(JSON.stringify(airportDataProvider(airportCode)));

};


const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});


/*
switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end("Its working!");
      break;
    case "/airport-details?airport-code=DEL":
      res.writeHead(200);
      //console.log(queryObject['airport-code']);
      const airportCode = queryObject['airport-code'];
      res.end(JSON.stringify(airportDataProvider(airportCode)));
      break;
 }
*/