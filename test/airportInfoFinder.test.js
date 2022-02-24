const airportFinder = require('../src/airportInfoFinder');

describe('airportFinder function', () => {
  it('should return the details about the airport given a valid code', () => {
    const result = airportFinder('AAA');
    expect(result).toStrictEqual({ airport: 'Anaa Airport', city: 'Anaa', country: 'French Polynesia' });
  });
  it('should throw an error if the code is invalid', () => {
    const result = airportFinder('ZZZ');
    expect(result.message).toBe('Invalid code. No information found');
  });
  it('should throw an error if the code is not 3 characters long', () => {
    const result = airportFinder('ABCD');
    expect(result.message).toBe('Invalid input. The airport code must have 3 characters');
  });
  it('should throw an error if the given code is a number', () => {
    const result = airportFinder(123);
    expect(result.message).toBe('Invalid input type. The function expects a string');
  });
  it('should throw an error if the given code is a boolean', () => {
    const result = airportFinder(true);
    expect(result.message).toBe('Invalid input type. The function expects a string');
  });
  it('should throw an error if the given code is an object', () => {
    const result = airportFinder({ key: 'value' });
    expect(result.message).toBe('Invalid input type. The function expects a string');
  });
  it('should throw an error if the given code is an array', () => {
    const result = airportFinder([1, 2, 3]);
    expect(result.message).toBe('Invalid input type. The function expects a string');
  });
});
