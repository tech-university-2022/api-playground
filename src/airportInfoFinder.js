const airports = require('../data/airports.json');

const airportFinder = (airportCode) => {
  let airportInformation;
  let infoFound = 0;
  if (typeof (airportCode) !== 'string') {
    return new Error('Invalid input type. The function expects a string');
  }
  if (airportCode.length !== 3) {
    return new Error('Invalid input. The airport code must have 3 characters');
  }
  airports.forEach((airport) => {
    if (airport.code === airportCode) {
      infoFound = 1;
      airportInformation = {
        airport: airport.name,
        city: airport.city,
        country: airport.country,
      };
    }
  });
  if (infoFound) {
    return airportInformation;
  }
  return new Error('Invalid code. No information found');
};

// console.log(airportFinder('AAA'));

module.exports = airportFinder;
