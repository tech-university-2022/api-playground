const { getAirportInformation } = require('../src/airportDetailsRetriever');

describe('GetAirportInformation function', () => {
  it('should return an object with aiport name, city, country if code is valid', () => {
    expect(getAirportInformation('MAS')).toEqual({ Name: 'Manus Island Airport', City: 'Lorengau', Contry: 'Lorengau' });
  });
  it('should return invaid message if no airport of the given code exists', () => {
    expect(getAirportInformation('FFS')).toBe('Cannot find an airport with that code!');
  });
  it('should return invalid message if the airport code is not a valid string', () => {
    try {
      getAirportInformation(6);
    } catch (err) {
      expect(err.message).toBe('Invalid, enter a proper airport code!');
    }
  });
});
