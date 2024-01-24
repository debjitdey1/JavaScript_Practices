const unity3d = {};

unity3d.id = "855769";
unity3d.name = "Rakesh Roshan";
unity3d.email = "deydebjit455@outlook.com";
unity3d.isloggin = false;

console.log(unity3d);

const RegularUser = {
  email: "Deydebjit660@gmail.com",
  name: {
    userName: "Debjit Dey",
    phone_Number: 889826554,
  },
};

console.log(RegularUser);
console.log(RegularUser.email.name?.phone_Number);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2); //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const obj3 = { ...obj1, ...obj2 }; // That is call For the Spread "..."Triple dot for the value assign
console.log(obj3);
