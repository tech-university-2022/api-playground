const getInformation = require('../src/airportDataFinder');

describe('getInformation function', () => {
  it('should return invalid data type if code is not a string', () => {
    const message = getInformation(1);
    expect(message).toBe('invalid datatype');
  });
  it('should return an object with country, name and city id code is present in data', () => {
    const dataObject = getInformation('DEL');
    expect(dataObject).toEqual({
      name: 'Indira Gandhi International Airport',
      country: 'India',
      city: 'New Delhi',
    });
  });
  it('should return airport not found if code is not present in data', () => {
    const dataObject = getInformation('abc');
    expect(dataObject).toEqual('Airport not found!');
  });
  it('should return invalid code if code length is not 3', () => {
    const dataObject = getInformation('a');
    expect(dataObject).toEqual('invalid code');
  });
});
