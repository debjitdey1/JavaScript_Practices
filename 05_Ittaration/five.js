const coding = ["js", "cpp", "rubby", "c++", "swift", "flutter", "react"];
// console.log(coding[keys]);
coding.forEach(function (val) {
  // callBack function is the parameters in the anything Keyword;
  console.log(val);
});
// ******* call back function aa veriable name Na nile oo hobe     exp: function (){},  ()=>{}// arrow Function

coding.forEach((item, index, arr) => {
  console.log(index, item, arr);
});
