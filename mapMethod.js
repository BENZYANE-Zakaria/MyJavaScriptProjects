//   map() in js is almost a dictionary in other languages
/* Map Data Type
Methods
-----set
-----get
-----delete
-----clear
-----has

Properties
------size
*/
//  first method to declare a map:
// let myMap = new Map();

// myMap.set(10, "Number");
// myMap.set("Name", "String");
//  second method to declare a map :
let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  ["false", "Boolean"],
  ["true", "Boolean"],
]);

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.size());

console.log(myMap.delete("Name"));
// return true in console to infom us that the elm is deleted successfully or false if elm doesn't exist
