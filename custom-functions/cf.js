// Function Definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // This is the function body
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call or **Run**
const jamesTotal = 500;
const jamesTaxRate = 0.5;
const myTotal = calculateBill(jamesTotal, jamesTaxRate);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('James');
// console.log(greeting);

function doctorize(name) {
  return `Dr ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);