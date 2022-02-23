const http = require("http");
const host = "localhost";
const url = require('url');
const port = 3000;
const airportDetails = require("airportmodule");

const requestHandler = (req, res) => {
  // query params extractation
  const queryObject = url.parse(req.url, true).query;
  // filter response
  // console.log("The query object is");
  // console.log(queryObject);
  // console.log(queryObject.airportcode);
  const aboutAirportObject = airportDetails.findAirportDetails(queryObject.airportcode);
  res.end(JSON.stringify(aboutAirportObject));
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
