const airport = require('../airportDetails');

describe("Airport Details",()=>{
    it("should throw an error if code length is greater than 3",()=>{
        const airportInfo = airport.airportInfo("AAAA");
        expect(airportInfo).toStrictEqual("Invalid Airport Code");
    });
    it("should throw an error if airport code in not a string",()=>{
        const airportInfo = airport.airportInfo(123);
        expect(airportInfo).toStrictEqual("Invalid Airport Code");
    });
    it("should throw an error if the given code doesnot exits",()=>{
        const airportInfo = airport.airportInfo("WER");
        expect(airportInfo).toStrictEqual("Airport not found");
    })
        
    it("should return a list of airport name ,city and country ",()=>{
        const airportInfo = airport.airportInfo("AAA");
        expect(airportInfo).toStrictEqual({name:'Anaa Airport', city:'Anaa', country:'French Polynesia'})
    })
    it("should return a list of airport name ,city and country ",()=>{
        const airportInfo = airport.airportInfo("aaa");
        expect(airportInfo).toStrictEqual({name:'Anaa Airport', city:'Anaa', country:'French Polynesia'})
    })
})