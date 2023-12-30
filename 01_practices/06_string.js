const name = "Debjit";
const repoCount = 50;
// console.log(name + repoCount + " You Will be Read it"); // concatenate for those string
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`); // modern developers are to be used

const gameName = new String("deydebjit");
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.blink());
console.log(gameName.indexOf("j")); // indexing of character
console.log(gameName.charAt(7)); //position of character
console.log(gameName.substring(4));

const newString = gameName.substring(2, 8); // start value to End value pair.......
console.log(newString);

const newSlice = gameName.slice(-2, 4); // it is count for the last of the string men's  -1
console.log(newSlice);

//
const stringOne = "     Yash      ";
console.log(stringOne);
console.log(stringOne.trim()); // trim() is to be used the "NO (Remove) spaces In the String  EXP:- "Yash"  "
console.log(stringOne.trimStart()); //trimStart() A new string representing str stripped of "whitespace" from its beginning (left side). Whitespace is defined as white space characters plus line terminators. EXP:- "Yash    ";
console.log(stringOne.trimEnd()); //trimEnd() A new string representing str stripped of "whitespace" from its end (right side). Whitespace is defined as white space characters plus line terminators.  EXP:- "   Yash";

//replace
const url = "https://debjit.com/debjit%20dey"; //browser To be URL Spaces To be Automatically define the  "%20";
console.log(url);
console.log(url.replace("%20", "-"));

//Split
const str = "Techno India Is Bad College In this westBengal";
const word = str.split(" ");
console.log(word[5]);
