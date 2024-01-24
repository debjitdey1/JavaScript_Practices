//object

//object letarals

const mysym = Symbol("Key1");
//defined to the symbol and and put the value is object;   Ans:  [Symbol(Key1)]: 'key1';
const jsUser = {
  name: "Debjit",
  [mysym]: "key1", //Symbol
  ph_no: 5454654,
  age: 20,
  email: "debjitdey559@google.com",
  collage: "Techno India Saltlake",
}; ///that is call Object AND object are the Keys Value Pair

console.log(jsUser);
console.log(jsUser.collage);
console.log(jsUser["email"]); // by  default Email is the String is call of the "";
console.log(jsUser[mysym]);

jsUser.email = "dejeetdey669@gmail.com";
Object.freeze(jsUser);
jsUser.email = "deydebjitmicrsoft.com";
jsUser.ph_no = 7454565;

console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js Users");
};
jsUser.greeting2 = function () {
  console.log(`hello Js Users`); // is this is call of the string (interpolation);
};

console.log(jsUser.greeting); //output "UNDEFIND";
