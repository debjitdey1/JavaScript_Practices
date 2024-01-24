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

const Cource = {
  Courcename: "JS Basic Concept",
  price: 899,
  CourceInstructor: "Hritesh Choudhuri",
}; //That is Call for The Destructing

const { CourceInstructor } = Cource; //1 ta object ar vitore "key" put korle tar value chole aseee output ar modhaaaa..
console.log(CourceInstructor);

//JSON File In EXAPMLE::

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Harold",
//           "last": "Williamson"
//         },
//         "location": {
//           "street": {
//             "number": 8746,
//             "name": "Ash Dr"
//           },
//           "city": "Redding",
//           "state": "South Dakota",
//           "country": "United States",
//           "postcode": 61576,
//           "coordinates": {
//             "latitude": "86.4428",
//             "longitude": "-135.2226"
//           },
//           "timezone": {
//             "offset": "+3:30",
//             "description": "Tehran"
//           }
//         },
//         "email": "harold.williamson@example.com",
//         "login": {
//           "uuid": "6f9d0bd9-9e58-4a62-bd0f-be50d86a5c9c",
//           "username": "angryzebra722",
//           "password": "single",
//           "salt": "M4vGNyk7",
//           "md5": "91d5d4f2b3b3b8e93b43bd3d6a435827",
//           "sha1": "7d4e9b2a3deef69f334935ff0e245986de636d71",
//           "sha256": "8505d37731d1553ae19d55df9afcea3ee5231cb495f09d0e2aee574054b9af8a"
//         },
//         "dob": {
//           "date": "1995-04-15T18:52:56.149Z",
//           "age": 28
//         },
//         "registered": {
//           "date": "2009-03-19T22:51:34.784Z",
//           "age": 14
//         },
//         "phone": "(854) 737-6796",
//         "cell": "(475) 845-7728",
//         "id": {
//           "name": "SSN",
//           "value": "177-06-7401"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/0.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "a6f8c1a3b6fad5b6",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }
