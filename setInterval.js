/*
BOM [Browser Object Model]
   setInterval(Function, Millseconds, Additional Params)
   clearInterval(Identifier)
 */
// Set the interval to do sth
// setInterval(function () {
//   console.log("This msg has been shown after Interval");
// }, 3000); // 2000 ms

// setInterval(sayMsg, 2000); // 2000 ms

// function sayMsg() {
//   console.log("Iam message");
// }
//   *****************************
// setInterval(sayMsg, 2000, "Zakaria", 36); // 2000 ms

// function sayMsg(user, age) {
//   console.log(`Iam message for ${user} His age is: ${age}`);
// }
// *****************************

let div = document.querySelector("div");

// counter is the handler
function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter); // stop process of countdown
  }
}

let counter = setInterval(countDown, 1000);
