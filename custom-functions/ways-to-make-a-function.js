// function doctorize(firstName) {
//   return `Dr ${firstName}`;
// }

// Anonymous Function
// function (firstName) {
//   return `Dr ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//   return `Dr ${firstName}`;
// }

// const inchToCm = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// Arrow Function
// const add = (a, b=3) => a + b;

// Returning an Object (OLD WAY)
// function makingABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// Returning an Object (NEW WAY)
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
