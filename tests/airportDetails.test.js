const { getAirportInfo } = require('../src/airportDetails');

describe('getAirportInfo function', () => {
  it('should return the aiports name,city and country when the correct code is given', () => {
    expect(getAirportInfo('CRK')).toEqual({ Name: 'Clark Field Airport', City: 'Mabalacat', Country: 'Philippines' });
  });
  it('should return the invalid message if aiport code does not exist', () => {
    expect(getAirportInfo('SSS')).toEqual('No aiport found');
  });
  it('should return the aiports name,city and country when the correct code is given in lower case', () => {
    expect(getAirportInfo('crk')).toEqual({ Name: 'Clark Field Airport', City: 'Mabalacat', Country: 'Philippines' });
  });
  it('should throw an error if the code is not a string', () => {
    expect(() => getAirportInfo(273)).toThrow('The code is not a proper airport code');
  });
});
