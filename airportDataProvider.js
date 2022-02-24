const allAirportData = require('../data/airports.json');

const airportDataProvider = (airportCode) => {

    if(typeof(airportCode) !== 'string'  || airportCode.length !== 3){
        return 'Invalid Data Entered';
    }

    const airportFound = allAirportData.filter( (airport) => airport.code.toLowerCase() == airportCode.toLowerCase());
    
    if(airportFound.length === 0)
        return 'Airport not found';

    const airportData = {
        name : airportFound[0].name,
        state : airportFound[0].state,
        country : airportFound[0].country
    }

    return airportData;

};

module.exports = {
    airportDataProvider
};