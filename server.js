const http = require('http');
const url = require('url');
const airportInfo = require('./src/airportDetailsRetriever');

const host = 'localhost';
const port = 3000;
const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.write("Server working!\n");
      break;
    default: 
      res.writeHead(200);
      res.write('Server Working!\n');
  }  
  const airportQuery = url.parse(req.url, true);
  if(req.url.startsWith('/airport-details')) {
    const airportCode = airportQuery.query['airport-code'];
    const airportDetails = airportInfo.getAirportInformation(airportCode);
    console.log(airportDetails);
    res.end(JSON.stringify(airportDetails));
  }
};
const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
// module.exports = {
//   requestHandler,
// };
