const airportsData = require('../data/airports.json');
const airportInformation = (airportCode) =>{
  if (typeof airportCode !== 'string') 
    throw Error('Enter a string');
  let airportDetails = airportsData.filter((airport) => airport.code === airportCode.toUpperCase());
  if(airportDetails.length === 0)
    return('airport not in database');
  const {name, city, country} = airportDetails[0];
  return {name, city, country};
}
console.log(airportInformation('blr'));

module.exports = {airportInformation};