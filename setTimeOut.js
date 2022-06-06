/*
BOM [Browser Object Model]
   setTimeout(Function, Timeout, Additional Params)
   clearTimeout(Identifier)
 */

//  setTimeout(function () {
//   console.log("This msg has been shown after timeout");
// }, 2000); // 2000 ms

// setTimeout(sayMsg, 2000); // 2000 ms

// function sayMsg() {
//   console.log("Iam message");
// }
//   *****************************
// setTimeout(sayMsg, 2000, "Zakaria", 36); // 2000 ms

// function sayMsg(user, age) {
//   console.log(`Iam message for ${user} His age is: ${age}`);
// }
// *****************************
let counter = setTimeout(sayMsg, 3000);

function sayMsg() {
  console.log(`Iam message`);
}

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};
