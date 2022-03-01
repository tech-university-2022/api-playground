const { getAirportDetails } = require('../src/airportDetailsGetter.js');

describe('getAirportDetails function', () => {
  it('should return airport details when a proper airport code is given as input', () => {
    const requiredAirportDetails = getAirportDetails('del');
    const expectedAirportDetails = {
      name: 'Indira Gandhi International Airport',
      city: 'New Delhi',
      state: 'Madhya Pradesh',
      country: 'India',
    };
    expect(requiredAirportDetails).toStrictEqual(expectedAirportDetails);
  });
  it('should throw Invalid input type when number is given as input', () => {
    try {
      getAirportDetails(5);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for airportCode.');
    }
  });
  it('should throw Invalid input type when array is given as input', () => {
    try {
      getAirportDetails(['a']);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for airportCode.');
    }
  });
  it('should throw Invalid input type when boolean is given as input', () => {
    try {
      getAirportDetails(false);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for airportCode.');
    }
  });
  it('should throw Invalid input type when decimal is given as input', () => {
    try {
      getAirportDetails(5.5);
    } catch (err) {
      expect(err.message).toBe('Invalid input type for airportCode.');
    }
  });
  it('should throw Invalid input type when object is given as input', () => {
    try {
      getAirportDetails({ a: 5.5 });
    } catch (err) {
      expect(err.message).toBe('Invalid input type for airportCode.');
    }
  });
  it('should throw airport not exists when airport code not in json file is given as input', () => {
    try {
      getAirportDetails('ABC');
    } catch (err) {
      expect(err.message).toBe('Airport with given code not exists.');
    }
  });
});
