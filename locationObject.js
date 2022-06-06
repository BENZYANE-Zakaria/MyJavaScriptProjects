console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href =
//   "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects";

// console.log(location.host); // ip & port number
// console.log(location.hostname); // ip

// console.log(location.protocol); // return protocol

//console.log(location.hash); // hash

location.replace("https://www.google.com/?hl=fr"); // replace current url without save in history
// assign() do the same thing but it saves both urls in the history
