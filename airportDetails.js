const airportDetails = require('./airports.json');

const getAirportDetails = (code) => {
  if (typeof code !== 'string') {
    return 'invalid input';
  }
  let printAirportDetails;
  airportDetails.forEach((airport) => {
    if (airport.code === code) {
      printAirportDetails = {
        Name: airport.name,
        City: airport.city,
        Country: airport.country,
      };
    }
  });
  if (printAirportDetails) {
    return printAirportDetails;
  }

  return 'airport does not exist';
};
module.exports = {
  getAirportDetails,
};
