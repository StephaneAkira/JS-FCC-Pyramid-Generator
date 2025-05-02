// let character = "Hello";

// let count = 8;
// console.log(profession);
// console.log(age);

// variables exercise 1
// console.log(count + 1);

// let rows = ["Naomi", "Quincy", "CamperChan"];

// console.log(rows[0]);

// array Exercise 1
// rows[2] = 10;
// rows.push("freeCodeCamp");
// rows.pop();
// let popped = rows.pop();
// let pushed = rows.push();
// console.log(rows);
// console.log(popped);
// console.log(pushed);

// to get the ast element in the array
// rows[rows.length - 1];

// Variables exercise 2
// let character = "Bloom";
// console.log(character);

// let user = prompt("Enter your name: ");

// console.log(user);

// Array Exercise 2

// let cities = ["London", "New York", "Mumbai"];
// console.log(cities);

// cities[2] = "Mexico City";
// console.log(cities);

// console.log("Hello World");

// Array Exercise 3

fruits = ["🍎", "🍌", "🍉", "🍑"];

// fruits.push("🍫");
// console.log(fruits);
// let notAFruit = fruits.pop();
// console.log(notAFruit);
// let newLenght = fruits.push();
// console.log(newLenght);
// console.log(fruits);

// console.log(fruits);

// ----------------------------------
// ----------------------------------

const character = "!";
const rows = [];
const count = 10;
// console.log(rows, character);

// Loops: for loops
// for (let i = 0; i < count; i = i + 1) {
//   console.log(i);
// }

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i + 1));
//   //   console.log(rows);
// }

// change to a different kind of loop

let inverted = false;

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

// If Statements
// if ("") {
//   console.log("Condition is true");
// } else if (5 > 10) {
//   console.log("5 is less than 10");
// } else {
//   console.log("This is the else block");
// }

// While loop
// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }

// inverted pyramid
// for (let i = count; i > 0; i--) {
//   rows.push(padRow(i, count));
// }

// array Exercise 3
// const numbers = [1, 2, 3];
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted);
// console.log(numbers);

let result = "";

// for ... of loop

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

// Function

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

padRow();

// Note:
// global scope variable can be accessed inside
// block level stuff such as , loops, functions, if statement etc...

// Function Exercise 1

// function addTwoNumbers(number_1, number_2) {
//   return number_1 + number_2;
// }

// let sum = addTwoNumbers(5, 10);
// console.log(sum);
