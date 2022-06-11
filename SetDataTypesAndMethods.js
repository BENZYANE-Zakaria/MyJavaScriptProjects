// Set is a collection of unique values.
// we can't access to set elem by index

let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set([1, 1, 1, 2, 3]); // or new set(myData)

// console.log(myData); // ret  1, 1, 1, 2, 3
// console.log(myUniqueData); // ret : 1, 2, 3
// console.log(myUniqueData.size); // ret 3
//.clear() // delete all
