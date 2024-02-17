// if
// "===" that is call striped Equal
if (2 != 3) {
  console.log("Exicuted");
}

// const temparature = 29;
// if (temparature == 37) {
//   console.log("Temparature less than 37");
// } else {
//   console.log("Temparature Grater than 37");
// }

const score = 156;
if (score > 100) {
  let power = "Fly"; // let besicall use blocked scope elements and VAR beically use the Global Scope Elements
  console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const balance = 5000;
if (balance > 500) console.log("Test"); // scope lagalam na ake bole "IMPLICITE SCOPE" scope na lagale oo Condition Checkec Hobee

//else if check the Condition
const balanced = 2100;
if (balanced < 500) {
  console.log("LessThan 500");
} else if (balance < 1000) {
  console.log("less than 1000");
} else if (balance > 1500) {
  console.log("less than 1500");
} else {
  console.log("less than 2100");
}

//Condition check "&&" and "||"
const userLoggedIn = true;
const userDebitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;
//UserLoggedIn && userDebitcard

if (userLoggedIn && userDebitCard) {
  console.log("Allow to The Buy The Cource");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Enter for The Browsers");
}
