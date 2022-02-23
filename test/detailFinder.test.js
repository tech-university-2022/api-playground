const {airportDetail} = require('../src/detailFinder');
describe('airportDetail Function',()=>{
    it("should return the detail's of the airport if correct input is given ",()=>{
        const detailOfAirport=airportDetail('AAA');
        expect(detailOfAirport).toStrictEqual({ AirportName: 'Anaa Airport', City: 'Anaa', country: 'Anaa' })
    })
    it("should throw error  if code is not given in correct form ",()=>{
        
        expect(()=>{
            airportDetail(123);
        }).toThrow('Not a valid code');
    })
    it("should throw error  if code is not  in our data file ",()=>{
        
        expect(()=>{
            airportDetail('kir');
        }).toThrow('No such airport code in data');
    })
})