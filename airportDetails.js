const airports = require("./airport/airports.json")

exports.airportInfo = (airportCode) =>{
    if(typeof(airportCode)!='string' || airportCode.length !== 3){
        return "Invalid Airport Code"
    }
    var airportDetails = airports.reduce(function(obj, curr){
        if (curr.code === airportCode.toUpperCase()) {
            obj["name"] = curr.name
            obj["city"] = curr.city
            obj["country"] = curr.country
        }
        if(obj.length ===0) return "Airport not found"
        return obj;
    }, {});
    if(Object.keys(airportDetails).length===0) return "Airport not found"
    return airportDetails;
};