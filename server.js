const http = require("http");
const host = "localhost";
const url = require('url');
const port = 3000;
const airportDetails = require("airportmodule");

const requestHandler = (req, res) => {
   // query params extract
   const queryObject = url.parse(req.url, true).query;
   // filter response
   res.end(JSON.stringify(airportDetails.findAirportDetails(queryObject.airportcode)));
};


const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
