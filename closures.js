// function outer() {
//   const outerVar = 'Hey I am the outer var';
//   function inner() {
//     const innerVar = 'Hey I am an inner var';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }

// const innerFn = outer();
// innerFn();

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  }
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');
console.log(sayHello('James'));
console.log(sayHello('Kait'));
console.log(sayHey('Kait'));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
