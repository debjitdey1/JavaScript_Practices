const userEmail = "";
if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have user Email");
}

// Falsy Values

// false, 0, -0, BigInt 0n, "", Null, Undefind, Nan     --> That is the Falsy VAlue

//Truthy Values
//"0", 'False', " ", { }, [ ], function(){}

if (userEmail.length === 0) {
  // Check the Empty Array
  console.log("Array Is Empty");
}

const emptyObject = {}; //Check the Empty Objects
if (Object.keys(emptyObject).length === 0) {
  console.log("Objects Is Empty");
}

//Nullish coalescing Operator (??): Null Undefind

// besically  "??" operator is use can checked the condition will be Excicuted first condition Will Be exicuted
let val1;
val1 = 10 ?? 6;
val1 = undefined ?? 78;
val1 = NaN ?? 21; //output : NaN(Not a Number)
val1 = null ?? 54;
val1 = null ?? 45 ?? 54; // First Value will Assign
console.log(val1);

// Ternary Operator

// Condition ? True : False

const iceTea = 499;
iceTea <= 299 ? console.log("less Than 299") : console.log("More Than 299 ");
