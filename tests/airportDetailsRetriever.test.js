const airport = require('../src/airportDetailsRetriever');

describe('getDetails', () => {
  it('should print return a string with details of given input airport code', () => {
    const output = airport.getDetails('DEL');
    expect(output).toBe('Indira Gandhi International Airport, New Delhi, India');
  });
  it('should give an error if null is given as input', () => {
    try {
      airport.getDetails(null);
    } catch (error) {
      expect(error.message).toBe('You must enter a string');
    }
  });
  it('should give an error if array is given as input', () => {
    try {
      airport.getDetails([1, 2, 3]);
    } catch (error) {
      expect(error.message).toBe('You must enter a string');
    }
  });
  it('should give an error if number is given as input', () => {
    try {
      airport.getDetails(2);
    } catch (error) {
      expect(error.message).toBe('You must enter a string');
    }
  });
  it('should give an error if no input is given', () => {
    try {
      airport.getDetails();
    } catch (error) {
      expect(error.message).toBe('You must enter a string');
    }
  });

  it('should give an error if the code entered is not present in data', () => {
    try {
      airport.getDetails('TWI');
    } catch (error) {
      expect(error.message).toBe('There is no such airport code in the data.');
    }
  });
});
