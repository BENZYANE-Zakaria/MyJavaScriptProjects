const user = {
  theName: "Zakaria",
  theAge: 36,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//     console.log(`Your name is ${obj.theName}`);
//     console.log(`Your age is ${obj.theAge}`);
//     console.log(`Your css skill progress is ${obj.skills.css}`);
//   }

// Destructring to our params
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your name is ${n}`);
  console.log(`Your age is ${a}`);
  console.log(`Your css skill progress is ${c}`);
}
