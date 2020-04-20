"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
*   Merge turns multiple Observables into a single Observable
*   Alternativ `concat`
*/
/*
*   Exercise Merge
*   From the server we get a set `Array<Coordinate>` of coordinates. From the device we a single set of coordinates that marks the current location of the device.
*   We would like to merge the current locations coordinate with the set of coordinates given from the server.
*   const locations = {"locations":[{"lat":56,"long":7},{"lat":56,"long":7}],"final":{"lat":56,"long":7}}
*   const currentLocation =  { lat : 54, long : 3 }
*/
const rxjs_1 = require("rxjs");
const locations = new rxjs_1.BehaviorSubject({ "locations": [{ "lat": 56, "long": 7 }, { "lat": 56, "long": 7 }], "final": { "lat": 56, "long": 7 } });
const currentLocation = new rxjs_1.BehaviorSubject({ lat: 54, long: 3 });
const merged = rxjs_1.merge(locations, currentLocation);
merged.subscribe((suc) => { console.log(suc); });
currentLocation.next({ lat: 323, long: 32323 });
