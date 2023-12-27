// const id = Symbol("123");
// const idNumber = Symbol("123");

// console.log(id == idNumber);
// console.log(id);
// console.log(idNumber);

// const bigNumber = 5555555669325556325563225566646874561577565656n; // n mens BIgINT
// console.log(bigNumber);

// const heroes = ["Spiderman", "Ironman", "Captain America"];
// let myobj = {
//   name: "Debjit",
//   age: 21,
// };
// console.log([heroes, myobj]);
// console.log(typeof idNumber);

// let place = null;
// console.log(typeof place); //That is the "Null" Type of Value is call for =="OBJECT"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myname = "Debjit Dey";

let changename = myname;
changename = "Dustu";
console.log(changename); // output:  Debjit Dey
console.log(myname);

let userOne = {
  accno: 2254658426652,
  ifsc: "contai",
};
let userTwo = userOne;
userTwo.ifsc = "kolkata";
console.log(userTwo.ifsc);
console.log(userOne.ifsc);
