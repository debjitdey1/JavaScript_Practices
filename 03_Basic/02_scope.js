let a = 58;

if (true) {
  // that is call for the "Block Scope"
  let a = 10;
  const b = 30;
  var c = 60;
  console.log("Inner: ", a); // value Input In Inner Value.
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }
console.log(a);
// console.log(b);
// console.log(c); // var Not to be block of the element

// scope ar baire jeta thakbe seta " Global Scope";

//Nested Scope

// closure----
function one() {
  const userName = "Debjit Dey";

  function two() {
    const Website = "YouTube";
  }
  // console.log(Website);
  two();
}
// one();

if (true) {
  const userNames = "Debjit Dey";
  if (userNames === "Debjit Dey") {
    const Websites = "YouTube";
    console.log(userNames + Websites); // Output = "Debjit Dey YouTube"
  }
  // console.log(Website);
}
// console.log(userNames);

function addOne(num) {
  return num + 1;
}
console.log(addOne(5));
