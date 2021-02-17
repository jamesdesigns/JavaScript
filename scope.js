// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();

// Block Scoping
// function isCool(name) {
//   let cool;

//   if ( name === 'James') {
//     cool = true;
//   }
  
//   console.log(cool);
//   return cool;
// }

// isCool('James');

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const dog = 'snickers';

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog();
// }

// go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}