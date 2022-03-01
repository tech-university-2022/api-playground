const allAirportDetails = require('../input/airports.json');

exports.getAirportDetails = function (airportCode) {
  if (typeof airportCode !== 'string') {
    throw new Error('Invalid input type for airportCode.');
  }
  const requiredAirport = allAirportDetails.filter((airport) => airport.code.toLowerCase() === airportCode.toLowerCase());
  if (requiredAirport.length === 0) {
    throw new Error('Airport with given code not exists.');
  }
  const requiredAirportDetails = {};
  requiredAirportDetails.name = requiredAirport[0].name;
  requiredAirportDetails.city = requiredAirport[0].city;
  requiredAirportDetails.state = requiredAirport[0].state;
  requiredAirportDetails.country = requiredAirport[0].country;
  return requiredAirportDetails;
};
