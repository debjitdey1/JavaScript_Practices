function SayMyName() {
  console.log("D");
  console.log("E");
  console.log("B");
  console.log("J");
  console.log("I");
  console.log("T");
}

// SayMyName();

// function AddTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }

function AddTwoNumber(number1, number2) {
  let result = number1 + number2;
  return result;
}

let result = AddTwoNumber(88, 49);
console.log("result:", result);

function loginUserMassge(username) {
  return `${username} is Logged In`;
}

console.log(loginUserMassge("Debjit"));
// console.log(loginUserMassge());

function LoggedMassage(username = "sam") {
  if (!username) {
    console.log("Please Enter The User Name");
    return;
  }
  return `${username}Just logged Off`;
}
console.log(loginUserMassge());
