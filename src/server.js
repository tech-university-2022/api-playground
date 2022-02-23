
const http = require("http");
const url = require('url');
const detailAirport=require('./detailFinder');
const host = "localhost";
const port = 3000;

const requestHandler = (req, res) => {
      //res.setHeader("Content-Type", "application/json");
    
      const queryObj=url.parse(req.url, true).query;
     // console.log(queryObj);
      const codeval=queryObj['airport-code'];
      
      const detail= detailAirport.airportDetail(codeval);
     
      res.end(JSON.stringify(detail));
     
        

 
};



const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
