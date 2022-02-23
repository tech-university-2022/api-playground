const getInfo = require('../src/airportInfo');

describe('getInfo function', () => {
  it('should give the object containing airport country,city and name', () => {
    const airport = getInfo('ZXE');
    const airportData = {
      country: 'United Kingdom',
      city: 'Edinburgh',
      name: 'Waverley station',
    };
    expect(airport).toStrictEqual(airportData);
  });
  it('should give error when airport does not exist', () => {
    const airport = getInfo('VRI');
    expect(airport).toBe('Airport does not exists');
  });
  it('should give error when airport code has invalid format', () => {
    const airport = getInfo([6, 9, 8]);
    expect(airport).toBe('Airport does not exists');
  });
});
// node ./src/airportInfo.js
// ./node_modules/.bin/jest.cmd ./tests/airportInfo.test.js
