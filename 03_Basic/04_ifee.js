// Ifee => Imidietly Invoked Function Expression

// IFEE Defination == "Global scope" aa Polution hoyar karone onekbar problem Hoy bole Global scope a veriables ke declare kore bole "IFEE" Use Kora hoyy

(function program() {
  //That is call For the "Name IFEE"
  console.log(`DB CONNECTED`);
})();

// ARROW FUNCTION

((NAME) => {
  // That is call for the Unamed IFEE
  console.log(`DB IS CONNECTED ${NAME}`);
})("DEBJIT DEY");

//program('DEBJIT DEY) ==>  THAT CALL BE FUNCTION EXICUTION

let value1 = 10;
let value2 = 15;
function addNumber(num1, num2) {
  let addNumbers = num1 + num2;
  return addNumbers;
}
addNumber(445, 784);
let result1 = addNumber(value1, value2);
let result2 = addNumber(25, 94);

console.log(result1);
console.log(result2);
