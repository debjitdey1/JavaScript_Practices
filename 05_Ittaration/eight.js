const newNums = [1, 2, 3, 4, 5];

// const myTotal = newNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and currval is ${currval}`);
//   return acc + currval;
// }, 3);
const myTotal = newNums.reduce((acc, cur) => acc + cur, 3);

console.log(myTotal);
