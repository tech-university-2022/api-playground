const http = require("http");
const host = "localhost";
const url = require('url');
const port = 3000;
const airportDetails = require("airportmodule");

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  // query params extractation
  const queryObject = url.parse(req.url, true).query;
  // filter response
  const aboutAirportObject = airportDetails.findAirportDetails(queryObject.airportcode);
  res.end(JSON.stringify(aboutAirportObject));
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
