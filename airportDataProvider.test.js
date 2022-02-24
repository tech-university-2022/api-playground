const {airportDataProvider} = require('../src/airportDataProvider');

describe('Returns details', ()=>{
    it('Give name, state, country', ()=>{
        let detailsOfAirport = airportDataProvider('AAA');
        expect(detailsOfAirport).toEqual({name: 'Anaa Airport', state: 'Tuamotu-Gambier',country: 'French Polynesia'})
    });

    it('Data of the code not found', ()=>{
        let detailsOfAirport = airportDataProvider('AIS');
        expect(detailsOfAirport).toEqual('Airport not found')
    });

    it('Invalid Input: data longer than expected', ()=>{
        let detailsOfAirport = airportDataProvider('AISH');
        expect(detailsOfAirport).toEqual('Invalid Data Entered')
    });

    it('Invalid Input: Integers', ()=>{
        let detailsOfAirport = airportDataProvider(123);
        expect(detailsOfAirport).toEqual('Invalid Data Entered')
    });

    it('Invalid Input: No data passed', ()=>{
        let detailsOfAirport = airportDataProvider( );
        expect(detailsOfAirport).toEqual('Invalid Data Entered')
    });



});

