// Destructring Mixed Content

const user = {
  theName: "Zakaria",
  theAge: 36,
  skills: ["HTML", "CSS", "JavaScript"],
  adresses: {
    morocco: "Rabat",
    ksa: "Ryadh",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [one, , three],
  adresses: { morocco: m },
} = user;

console.log(` Your name is: ${n}`);
console.log(` Your age is: ${a}`);
console.log(` Your skills are: ${three}`);
console.log(` You live in: ${m}`);
