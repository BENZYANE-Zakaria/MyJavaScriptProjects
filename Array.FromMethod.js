/*
Arraymethods
  array.from(Iterable, mapFunc, This)
  ---variable
  --String numbers
  --Set
  --Using the map function
  --Arrow function
  --Shorten the method + use arguments
  */

// console.log(Array.from("zakaria")); // return ['z', 'a', 'k', 'a', 'r', 'i', 'a']
// console.log(Array.from("12345")); // return ['1', '2', '3', '4', '5']
// console.log(Array.from(12345)); // return []

// console.log(
//   Array.from("12345", function (n) {
//     // return +n + +n; // return ['11', '22', '33', '44', '55'] so we use '+' before number
//     return +n + +n; // return [2, 4, 6, 8, 10]
//   })
// );
//  the same function but simplifited one 'arrow function'
// console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(mySet);
