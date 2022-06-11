const user = {
  theName: "Zakaria",
  theAge: 36,
  theTitle: "Developer",
  theCountry: "Morocco",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

// we can change the propertyName
//const { theName: n, theAge: a, theCountry = "maroc" } = user; // "maroc" is default
const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html: h, css }, // we also can change its name!
} = user;
console.log(n);
console.log(a);
console.log(theCountry);
console.log(`My HTML skill progress is *
${h}`);
console.log(`My CSS skill progress is *
${css}`);
//////////////////////////////////////  more things are in video 119
