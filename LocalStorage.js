/* BOM [Browser Object Model]
Local Storage
  setItem
  getItem
  removeItem
  clear
  key

Info
  No Expiration Time
  HTTP And HTTPS
  Private Tab
*/
// we can find our local storage in : inspecter : applications : storage : local storage
// Set
window.localStorage.setItem("color", "red");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// remove
// window.localStorage.removeItem("color");
// window.localStorage.clear(); // this clear aaall key values

// get key
console.log(window.localStorage.key(0));

// set color in page
document.body.style.backgroundColor = window.localStorage.getItem("color");
console.log(window.localStorage);
console.log(typeof window.localStorage);

//***************html : nothing, just js link*/




// ################  HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Learn JavaScript</title>
    <style>
        body {
            background-color: #eee;
        }
        ul {
            padding: 0;
            margin: 0;
            background-color: #ddd;
            margin: 20px auto;
            padding: 20px;
            width: 400px;
            list-style: none;
            display: flex;
            justify-content: space-between;
        }
        ul li {
            width: 60px;
            height: 60px;
            border: 2px solid transparent;
            opacity: 0.4;
            cursor: pointer;
            transition: 0.3s;
        }

        ul li.active,
        ul li:hover {
            opacity: 1;
        }
        ul li:first-child{
            background-color:red;
        }
        ul li:nth-child(2) {
            background-color: green;
        }
        ul li:nth-child(3) {
            background-color: blue;
        }
        ul li:nth-child(4) {
            background-color: BLACK;
        }
        .experiment {
            background-color: red;
            width: 600px;
            height: 300px;
            margin: 20px auto;
        }
    </style>
</head>

<body> 
    <ul>
    <li class="active" data-color="red"></li>
    <li  data-color="green"></li>
    <li  data-color="blue"></li>
    <li  data-color="black"></li>
    </ul>
<div class="experiment"></div>

<script type="text/javascript" src="localStorageColorAppPractice.js"></script>
</body>
</html>   