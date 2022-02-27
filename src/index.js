const fs=require('fs');
const http = require("http");
const host = "localhost";
const port = 3000;


const airportDataReader=(filePath, airportCode)=> {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            const airportData = JSON.parse(data);
            airportData.forEach(element => {
                if(element.code===airportCode)  
                resolve('Name:' + element.name +' City:'+ element.city +' Country:'+ element.country);
            });
    })
    
    
    
  });
}

let data;
const airportData= async (fileName, airportCode)=>{
    data=await airportDataReader(fileName, airportCode);
    console.log(data);
   
}


const requestHandler = (req, res) => {
    res.end(data);
  };
  
airportData('./airportData.json', 'AAE');


const server = http.createServer(requestHandler);

server.listen(port, host, () => {
  console.log(`Server started. Visit http://${host}:${port}`);
});
 


