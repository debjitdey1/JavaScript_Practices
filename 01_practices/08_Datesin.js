let myDate = new Date(); // is to be Typeof "Object"
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let mycreatedDate = new Date(2024, 0, 6, 15, 27, 57); // i will customize of the date
console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000)); // converted to the second..

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear() + 1);
console.log(newDate.getTimezoneOffset());

newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(toLocaleString);
