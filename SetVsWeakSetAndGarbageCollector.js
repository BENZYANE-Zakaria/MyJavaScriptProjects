// JavaScript WeakSet object is used to store only the weakly held objects

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);
