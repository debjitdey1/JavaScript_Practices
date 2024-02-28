//For

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 Is the Biggest Number");
  }
  console.log(element);
}
for (let i = 0; i >= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 Is the Biggest Number");
  }
  console.log(element);
}

//LOOP IN FORMETTING THE LOOPS CONCEPTS

// for (let i = 0; i <= 15; i++) {
//   console.log(`outer loops values: ${i}`);
//   for (let j = 0; j <= 15; j++) {
//     // console.log(`Inner Loops values ${j}, and Inner loops values ${i}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

let myArr = ["spiderMan", "Iron MAn", "Thor", "Panther"];
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}
