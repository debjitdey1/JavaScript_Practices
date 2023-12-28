const name = "Debjit";
const repoCount = 50;
// console.log(name + repoCount + " You Will be Read it"); // concatinate for those string
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`); // modern devlopers are to be used

const gameName = new String("deydebjit");
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.blink());
console.log(gameName.indexOf("j")); // indexing of charecter
console.log(gameName.charAt(7)); //position of charecter
console.log(gameName.substring(4));

const newstring = gameName.substring(2, 8); // start value to End value pair.......
console.log(newstring);

const newSlice = gameName.slice(-2, 4); // it is count for the last of the string men's  -1
console.log(newSlice);
