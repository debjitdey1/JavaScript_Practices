const MarvelHeroes = ["Thor", "IronMan", "SpiderMan"];
const dc_Heroes = ["superman", "Flash", "Badman"];
// MarvelHeroes.push(dc_Heroes);

// console.log(MarvelHeroes);

const newHeroes = MarvelHeroes.concat(dc_Heroes); // concat() Method marge Two Elements one by One
console.log(newHeroes);

const all_new_Heroes = [...MarvelHeroes, ...dc_Heroes]; //That is Call for the Spread Operator
console.log(all_new_Heroes);

const another_array_number = [1, 2, 3, [4, 6], [46, 87, [56, 32, 99, 21]]];
const another_array = another_array_number.flat(Infinity); //The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ Name: "Hitesh" })); // that is ouput of the Empty Tag

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //converted to the Array
