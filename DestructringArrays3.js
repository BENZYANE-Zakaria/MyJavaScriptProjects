//  for exchanging values between two variables

let book = "video";
let video = "book";
//********************Classic method******************************** */
// // Save book value in stash
// let stash = book; // video

// // change book value
// book = video;

// // Chang video value
// video = stash; // video
//*****************New method using destructuring ******** */
[book, video] = [video, book];

console.log(book); // gives book
console.log(video); //gives video
