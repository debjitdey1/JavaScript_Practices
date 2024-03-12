const myObjects = {
  js: "JavaScript",
  rub: "Rubby",
  py: "Python",
  swift: "Swift by Apple",
};

for (const key in myObjects) {
  //   console.log(key); // it display the key;
  //   console.log(myObjects[key]); //it display the Values;
  //   console.log(`${key} is the value is ${myObjects[key]}`);
}

const programming = ["js", "cpp", "rubby", "c++", "swift", "flutter", "react"];
for (const key in programming) {
  //   console.log(key);
  //   console.log(programming[key]);
}

//Map is Not to be "Ittratable"
const map = new Map();
map.set("In", "India");
map.set("USA", "United Sate of America");
map.set("Fr", "France");
for (const key in map) {
  console.log(key);
}
