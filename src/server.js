const http = require('http');
const url =require('url');
const {airportInformation} = require('./airportDetailsProvider.js');
const host = 'localhost';
const port = 3000;
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const queryParameter = url.parse(request.url, true).query;
    let code = queryParameter['airport-code'];
    let airportObj = airportInformation(code);
    //const aiprortCodeReq = queryParameter.airport-code ;
    response.end(JSON.stringify(airportObj));
});

server.listen(port, host, () => {
    console.log(`Server started. Visit http://${host}:${port}/airport-details?airport-code=DEL`);
  });