let index = 0;
while (index < 10) {
  console.log(`value of Index is ${index}`);
  index = index + 2;
}

let arr1 = ["ayan", "abhirup", "Yash", "Pritam"];
let arr2 = 1;
while (arr2 < arr1.length) {
  console.log(`Value is ${arr1[arr2]}`);
  arr2 = arr2 + 1;
}

let score = 10;
do {
  console.log(`Score is a ${score}`);
  score++;
} while (score <= 10);

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(arr);
}

// Pair to the Key Value Pair .........// MAp beciacally defind the Unique Value
const map = new Map();
map.set("In", "India");
map.set("USA", "United Sate of America");
map.set("Fr", "France");
console.log(map);

// Individuals For of Loop in Key value pair

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
