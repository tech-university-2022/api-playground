const http = require('http');
const url =require('url');
const {airportInformation} = require('./airportDetailsProvider.js');
//create a server object:
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const queryParameter = url.parse(request.url, true).query;
    let code = queryParameter.airportCode;
    let airportObj = airportInformation(code);
    //const aiprortCodeReq = queryParameter.airport-code ;
    response.end(JSON.stringify(airportObj));
}).listen(3000);