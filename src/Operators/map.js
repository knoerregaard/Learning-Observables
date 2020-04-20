"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/*
* Map
* A special type of Observable which shares a single execution path among observers
* https://www.learnrxjs.io/learn-rxjs/subjects/subject
*
*/
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
//emit (1,2,3,4,5)
const source = rxjs_1.from([1, 2, 3, 4, 5]);
//add 10 to each value. New observable
const example = source.pipe(operators_1.map(val => val + 10));
//output: 11,12,13,14,15.
example.subscribe(val => console.log(val));
/*
*   Exercise 1
*   const person = from([{name: "Nilson", age : 33, gender : "man"}, {name: "Charlot", age : 44, gender : "woman"}])
*   If a person is a woman a map operation should transform the name to "Ms. Charlot" and if the person is a man the name should change to "mr. Nilson"
*/
const person = rxjs_1.from([{ name: "Nilson", age: 33, gender: "man" }, { name: "Charlot", age: 44, gender: "woman" }]);
// Result, We dont mutate the collection. instead we create a new one. (spread / rest)
person.pipe(operators_1.map(pers => { return pers.gender == "man" ? { pers, name: "mr " + pers.name } : Object.assign(Object.assign({}, pers), { name: "ms " + pers.name }); })).subscribe((suc) => { console.log(suc); });
