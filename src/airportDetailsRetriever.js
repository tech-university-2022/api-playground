const airportDetails = require('../resources/airportsInfo.json');

const getAirportInformation = (code) => {
  if (typeof code !== 'string' || code.length !== 3) throw Error('Invalid, enter a proper airport code!');
  let foundFlag = 0;
  let airportInformation;
  airportDetails.forEach((airport) => {
    if (airport.code === code) {
      foundFlag = 1;
      airportInformation = {
        airport_name: airport.name,
        airport_code: code,
        city: airport.city,
        country: airport.city,
      };
    }
  });
  if (foundFlag === 0) return 'Cannot find an airport with that code!';
  return airportInformation;
};
// try {
//   console.log(getAirportInformation('MAS'));
// } catch (err) {
//   console.log(err.message);
// }
module.exports = {
  getAirportInformation,
};
