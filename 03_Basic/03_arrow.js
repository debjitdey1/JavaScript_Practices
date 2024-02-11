const user = {
  userName: "Debjit Dey",
  amount: 669,

  welcomeMassage: function () {
    console.log(`${this.userName}, Welcome To the Website,..`);
    console.log(this); // this " current Context Will be changed" .;
  },
};

user.welcomeMassage();
user.userName = "Ritwick Dey"; // Context Will be changed it
user.welcomeMassage();
// console.log(this); // this " current Context Will be Empty" .;

function code() {
  console.log(this);
}

code();

//++++++++++++++   Interview Questions +++++++++++++++++

// const codes = function () {
//   let userNames = "Yash";
//   console.log(this.userNames);
// };
const codes = () => {
  let userNames = "Yash";
  console.log(this.userNames);
};

codes();
