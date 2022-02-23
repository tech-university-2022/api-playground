const airportData = require('../data/airports.json');

exports.getDetails = (airportCode) => {
  if (typeof (airportCode) !== 'string') { throw new Error('You must enter a string'); }
  const airportDetails = {};
  for (let index = 0; index < airportData.length; index += 1) {
    const currentAirport = airportData[index];
    if (currentAirport.code.toLowerCase() === airportCode.toLowerCase()) {
      airportDetails.airport_name = currentAirport.name;
      airportDetails.airport_code = currentAirport.code;
      airportDetails.city = currentAirport.city;
      airportDetails.country = currentAirport.country;
      return airportDetails;
    }
  }
  throw new Error('There is no such airport code in the data.');
};
