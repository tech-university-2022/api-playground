const http = require("http");
const url = require('url');
const host = "localhost";
const port = 3000;
const airportData = require('./airportDetails');
 
const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject.airportcode);
    console.log(typeof(queryObject.airportcode));
    const airportDetail = airportData.airportInfo(queryObject.airportcode);
    console.log(airportDetail);
    res.end('Airport Details');
};

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});