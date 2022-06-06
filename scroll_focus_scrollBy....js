// let myNewWindow = window.open(
//   "https://www.google.com",
//   "",
//   "width=600,height=500"
// );
// in console we can use console.focus() or close()...

// window.scrollTo({
//   left: 5000,
//   top: 2000,
//   behavior: "smooth",  // moving
// });
//********************** practics*/

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// ############################### Its HTML ConvolverNode<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>Learn JavaScript</title>
// <style>
//   body {
//     height: 5000px;
//     width: 5000px;
// }
// button {
//     background-color: red;
//     border: none ;
//     color: white;
//     font-weight: bold;
//     padding: 6px;
//     border-radius:4px;
//     position: fixed;
//     bottom: 20px;
//     right: 20px;
//     display: none;
//     cursor: pointer;
// }
// </style>
// </head>

// <body>
//    <button type="button">Up</button>
//     <script type="text/javascript" src="scroll_focus_scrollBy....js"></script>

// </body>
// </html>
