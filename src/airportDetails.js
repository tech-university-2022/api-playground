const airports = require('../resources/airportsInfo.json');

const getAirportInfo = (airportCode) => {
  if (typeof airportCode !== 'string' || airportCode.length !== 3) throw Error('The code is not a proper airport code');
  let foundFlag = 0;
  let airportInformation;
  airports.forEach((airport) => {
    if (airport.code.toLowerCase() === airportCode.toLowerCase()) {
      foundFlag = 1;
      airportInformation = {
        Name: airport.name,
        Code: airport.code,
        City: airport.city,
        Country: airport.country,
      };
    }
  });
  if (foundFlag === 0) {
    return 'No aiport found';
  }
  return airportInformation;
};
module.exports = { getAirportInfo };
