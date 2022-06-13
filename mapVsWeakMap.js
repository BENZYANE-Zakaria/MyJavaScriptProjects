/*
- Map vs weakMap
  weakMap allows garbage collector to do task but not map;

  Map => Key can be anything
  weakMap => key can be object only
*/

let mapUser = { theName: "Zakaria" };
let myMap = new Map();
myMap.set(mapUser, "Object value");

mapUser = null; // Override the reference
console.log(myMap);

console.log("#".repeat(20));
let wMapUser = { theName: "Zakaria" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object value");

wMapUser = null; // Override the reference

console.log(myWeakMap);
