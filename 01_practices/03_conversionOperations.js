let score = "65"; // this is call string value

console.log(typeof score); // output --> string

let valueInNumber = Number(score); // string value is converted to be Number  is to be call...
console.log(typeof valueInNumber); // output --> number
console.log(valueInNumber);

// let score = "65abc"

//console.log(score);           --> output =>  NaN ("Not a Number")

let isBoolean = "hitesh";

let booleanIsLoggedIn = Boolean(isBoolean);
console.log(booleanIsLoggedIn);

//doumentaion

// 1 ==> true; 0 ==> False
// "" ==> false;
// "Debjit" ==> True;

let someNumber = 54; // call Number

let stringNumber = String(someNumber);
console.log(stringNumber); //You can see the number but that is the "String"
console.log(typeof stringNumber); // pass for  output in String

/*
let someNull = 54;          // call Number

let nullNumber = null(someNull); // you can define the null of the charecter / number ....Theare is  output will be ==> "null is not a function".
console.log(nullNumber); //You can see the number but that is the "String"

*/

//********************************** OPERATIONS **********************************//

let value = 8;
//then value will be output in "-8"
let negValue = -value;
console.log(negValue);

let name1 = "Hey,";
let name2 = " Debjit Dey";

let name3 = name1 + name2;
console.log(name3);

console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
