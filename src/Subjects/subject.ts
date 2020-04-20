export default{};

/*
* Subject
* A special type of Observable which shares a single execution path among observers
* https://www.learnrxjs.io/learn-rxjs/subjects/subject
* 
*/
import {from, Subject, BehaviorSubject } from "rxjs";


// Interface that shapes our objects
interface Coordinates {
    lat: number,
    long : number
}

// Turn the array into an observable
let coord$ = new Subject<Coordinates>();


function addCoordinate(lat : number, long : number){
    coord$.next({lat : lat, long : long});
}

// A subscription is created
coord$.subscribe(
    // events are captured
    (suc)=>{console.log(suc)}
)

// "events" are added to the stream
addCoordinate(57, 77);
addCoordinate(44, 56);
addCoordinate(22, 34);
setTimeout(() => {
    addCoordinate(2, 34);
}, 2000);
addCoordinate(1, 1);
