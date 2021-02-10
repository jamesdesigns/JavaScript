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
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

// Methods!!
const james = {
  name: 'James Hooper',
  // Short Hand Method - MOST COMMON WAY
  sayHi() {console.log('Hi!')},
  // Arrow Function Method
  whisperHi: () => {
    console.log('Heyyy James');
  }
}

// Call Back Functions
// Click Callback
const button = document.querySelector('.clickMe');
function handleClick() {
  console.log('Great clicking!');
}

button.addEventListener('click', handleClick); // james.sayHi IS the callback function

// Timer Callback
setTimeout(james.sayHi, 1000); // Run this timer callback after 1 second
