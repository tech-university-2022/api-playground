const airportData = require('../data/airports.json');

const getInformation = (airportCode) => {
  if (typeof airportCode !== 'string') {
    return 'invalid datatype';
  }
  if (airportCode.length !== 3) {
    return 'invalid code';
  }
  const requiredAirportData = {};
  airportData.forEach((airport) => {
    if (airport.code === airportCode) {
      requiredAirportData.airport_name = airport.name;
      requiredAirportData.airport_code = airport.code;
      requiredAirportData.city = airport.city;
      requiredAirportData.country = airport.country;
    }
  });
  if (Object.keys(requiredAirportData).length === 0) {
    return 'Airport not found!';
  }
  return requiredAirportData;
};

// console.log(getInformation("a"));
module.exports = getInformation;
