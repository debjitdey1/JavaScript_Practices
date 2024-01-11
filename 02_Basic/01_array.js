//()== that is call paranthises   {}==> That is Call curliBracess    []==> that is call brackets

const myArray = [8, 5, 9, 7, 3, 4];
const myHeroes = ["Marvel", "SpiderMan", "Captain America"];

const myNewArray = new Array(5, 9, 64, 470);
console.log(myArray);
console.log(myNewArray[3]);

// ARRAY Methods

myArray.push(12); // array new element To be Added [8, 5, 9, 7, 3, 4, 12]
myArray.pop(); // pop are the array last Element To be Removed;
myArray.unshift(47); //The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
myArray.shift(); //no more parameter/arguments
console.log(myArray);

const myArrayNew = myArray.slice(1, 3);
console.log(myArrayNew); // slice() value to be insert start value to End value-1;
console.log("A", myNewArray);

const myArrayNew2 = myArray.splice(1, 3);
console.log(myArrayNew2); //splice() value to be insert start value to End value+1;
console.log("B", myNewArray);
