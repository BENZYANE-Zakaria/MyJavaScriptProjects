let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message from Onclick 1");
// }
// function two() {
//   console.log("Message from Onclick 2");
// }

// window.onload = "zakaria";

// myP.addEventListener("click", function () {
//   console.log("Message from Onclick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

// ****** Add Event to element before its existing ****

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I am cloned");
  }
});
