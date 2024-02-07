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

function calculatecartPrice(value1, ...num1) {
  // "..." that is call for the "rest parameters";
  return num1;
}

console.log(calculatecartPrice(200, 456, 789, 654));

const user = {
  usernames: "Debjit Dey",
  prices: 989,
};

function handleObjects(anyobjects) {
  console.log(
    `User Name is ${anyobjects.usernames} and Price name is ${anyobjects.prices}`
  );
}

handleObjects(user);

const MynewArray = [200, 625, 791, 545, 842];

function returnSecondvalue(getArray) {
  return getArray[3];
}

console.log(returnSecondvalue(MynewArray));
//Another Wayy
console.log(returnSecondvalue([200, 625, 791, 545, 842]));
