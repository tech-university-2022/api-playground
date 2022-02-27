const http = require('http');
const url = require('url');
const getInfo = require('../src/airportInfo');

const host = 'localhost';
const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const queryObject = url.parse(req.url, true).query;
  const airportCode = queryObject['airport-code'];
  const airportDetails = getInfo(airportCode);
  // console.log(airportDetails);
  res.end(JSON.stringify(airportDetails));
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}/airport-details?airport-code=DEL`);
});
