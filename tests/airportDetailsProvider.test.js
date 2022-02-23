const {airportInformation} = require('../src/airportDetailsProvider.js');
describe('airportInformation that returns details of airport', () => {
    it('should return details of airport when code given', ()=>{
        const testInformation = airportInformation('DEL');
        expect(testInformation).toStrictEqual({ name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India'});
    });
    it('should return details of airport when code given in lowercase', ()=>{
        const testInformation = airportInformation('del');
        expect(testInformation).toStrictEqual({ name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India'});
    });
    it('should throw error if input not string', ()=>{
        try{ airportInformation(123); }
        catch(err){ expect(err.message).toEqual('Enter a string');}
    });
    it('should return not in database if different value given', ()=>{
        const testInformation = airportInformation('kkk');
        expect(testInformation).toStrictEqual('airport not in database');
    });
    it('should throw error if nothing input', ()=>{
        try{ airportInformation(); }
        catch(err){ expect(err.message).toEqual('Enter a string');}
    });
});