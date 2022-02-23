const airportsData = require('../airportsData.json');

const getInfo = (airportCode) => {
  if (typeof airportCode !== 'string') { return ('Airport does not exists'); }
  const airportDetails = {};
  let airportExists = 0;
  airportsData.forEach((airport) => {
    if (airport.code === airportCode) {
      airportExists = 1;
      airportDetails.airport_name = airport.name;
      airportDetails.airport_code = airport.code;
      airportDetails.city = airport.city;
      airportDetails.country = airport.country;
    }
  });
  if (airportExists) { return airportDetails; }
  return ('Airport does not exists');
};
module.exports = getInfo;
// console.log(getInfo('ZXE'));
