const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const NewNumbers = numbers.map((num) => num + 10); // not to be scope open and the value is same
const NewNumberss = numbers.map((num) => {
  // will be scope open is value is same
  return num + 25;
});
const number = numbers.map((num) => num * 21).map((num) => num + 1);
console.log(NewNumbers);
console.log(NewNumberss);
console.log(num);
