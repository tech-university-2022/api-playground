const airportData = require('./airportData.json');

const airportDetail = (airportCode) => {
    let detailObj = {};
    let isCode = false;
    /* if (typeof (airportCode) !== 'string') {
        throw new Error('Not a valid code');
    } */
    airportData.forEach((data) => {
        if (data.code === airportCode) {
            isCode = true;

            detailObj = {
                AirportName: data.name,
                City: data.city,
                country: data.city
            }


        }


    })
    if (isCode !== true) {
        throw new Error('No such airport code in data');
    }
    return detailObj;

}


module.exports = { airportDetail };
