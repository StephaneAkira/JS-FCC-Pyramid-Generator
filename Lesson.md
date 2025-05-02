# Every explanation regarding the Project will go here

# Important Notes:

- JavaScript has seven primitive data types, with String being one of them.

- Note that when reassigning a variable, you do not use the let keyword again.

- strings are immutable while arrays aren't

- the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:

Example Code
lineOne = lineOne + "\n" + lineTwo;

# Variables

- Declaring a variable means giving it a name. In JavaScript, this is often done with the let keyword. For example, here is how you would declare a hello variable:

- Example Code
  let hello;
  Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.

- The default value of an uninitialized variable is undefined. This is a special data type that represents a value that does not have a definition yet.

- Declaring a variable with the let keyword allows it to be reassigned. This means you could change character later to be a completely different value.

- A const variable also cannot be uninitialized

- An empty string is represented by quotation marks with nothing between them, such as "".

# Strings

# String Methods

# .repeat()

the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

Example Code
const activity = "Code! ";
activity.repeat(3);

# Arrays

- declaring an empty array

let array = [];

- You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.

You can access the value using bracket notation, such as array[0]

- Arrays are special in that they are considered mutable. This means you can change the value at an index directly.

- Notice how the value inside your rows array has been changed directly? This is called mutation. As you learn more about arrays, you will learn when to mutate an array, and when you should not.

- But you may not know how many elements are in an array when you want the last one.

You can make use of the .length property of an array - this returns the number of elements in the array.

- To get the last element of any array, you can use the following syntax:

Example Code
array[array.length - 1]

# Array Methods

- A method in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the .log() method, which is part of the console object.

# .push()

Arrays have their own methods, and the first you will explore is the .push() method. This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:

Example Code
array.push(12);

- .push() returns the new length of the array, after adding the value you give it

# .unshift()

The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array. .unshift() returns the new length of the array it was called on.

- Example Code
  const countDown = [2, 1, 0];
  const newLength = countDown.unshift(3);
  console.log(countDown); // [3, 2, 1, 0]
  console.log(newLength); // 4

# .pop()

Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

# .shift()

Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element. Here is an example of the .shift() method:

Example Code
const numbers = [1, 2, 3];
numbers.shift();

The numbers array would be [2, 3].

# Loops

# for loop

- When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.

You are going to start with a basic for loop. for loops use the following syntax:

Example Code
for (iterator; condition; iteration) {
logic;
}

- To generate a pyramid, you will need to create multiple rows

- Your loop now needs a proper iterator. The iterator is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.

It is a common convention to use i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). For example, here is a for loop that declares an index variable and assigns it the value 100.

Example Code
for (let index = 100; "second"; "third") {

}

- The condition of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

# for ... of loop

The syntax for a for...of loop looks like:

Example Code
for (const value of iterable) {

}

# while loop

A while loop will run over and over again until the condition specified is no longer true. It has the following syntax:

Example Code
while (condition) {
logic;
}

- Right now, if you change continueLoop to true, your while loop will run forever. This is called an infinite loop, and you should be careful to avoid these. An infinite loop can lock up your system, requiring a full restart to escape.

To avoid this, start by using the increment operator to increase the value of the done variable inside your loop.

# Function

- A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

Example Code
function name(parameter) {

}

- The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

- In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses. For example, this code defines and calls a test function.

Example Code
function test() {

}
test();

- By default, functions return undefined as their value

- In order to return something else, you need to use the return keyword. Here is an example of a function that returns the string "Functions are cool!":

Example Code
function demo() {
return "Functions are cool!";
}

- When you have a value that is explicitly written in your code, like the "Hello!" string in your function, it is considered to be hard-coded. Hard-coding a value inside a function might not make it as reusable as you'd like.

Instead, you can define parameters for the function. Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code.

To add a parameter to your function, you need to add a variable name inside the parentheses. For example, this demo function has a name parameter:

Example Code
function demo(name) {

}

- A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.

- When you pass a value to a function call, that value is referred to as an argument. Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

Example Code
function demo(name) {
return name;
}
demo("Naomi");

- An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your code inside a function or a block statement. This means any code after a return statement will not run.

- Give your padRow function a rowNumber and rowCount parameter. Multiple parameters are separated by a comma:

- In a function, the return keyword is used to specify a return value. For example, this function would return the value given to the first parameter:

Example Code
function name(parameter) {
return parameter;
}

- A function call allows you to actually use a function. You may not have been aware of it, but the methods like .push() that you have been using have been function calls.

A function is called by referencing the function's name, and adding (). Here's how to call a test function:

Example Code
test();

- our padRow function has two parameters which you defined. Values are provided to those parameters when a function is called.

The values you provide to a function call are referred to as arguments, and you pass arguments to a function call. Here's a function call with "Hello" passed as an argument:

Example Code
test("Hello");

# JS Scope

Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.

- The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope. Your character, count, and rows variables are all in the global scope.

- When a variable is in the global scope, a function can access it in its definition. Here is an example of a function using a global title variable:

Example Code
const title = "Professor ";
function demo(name) {
return title + name;
}
demo("Naomi")

- Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a reference error

- Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in.

- Example Code
  function getName() {
  const name = "Camper cat";
  return name;
  }

console.log(getName()); // "Camper cat"

const capturedReturnValue = getName();
console.log(capturedReturnValue); // "Camper cat"

console.log(name); // reference error

# Operators

- Your pyramid generator now functions as expected. But this is an excellent opportunity to further explore the code you have written.

The addition operator is not the only way to add values to a variable. The addition assignment operator can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable." For example, these two statements would yield the same result:

Example Code
test = test + 1;
test += 1;

- Because you are only increasing i by 1, you can use the increment operator ++. This operator increases the value of a variable by 1, updating the assignment for that variable. For example, test would become 8 here:

Example Code
let test = 7;
test++;

- The equality operator == is used to check if two values are equal. To compare two values, you'd use a statement like value == 8.

- The equality operator can lead to some strange behavior in JavaScript. For example, "0" == 0 is true, even though one is a string and one is a number.

The strict equality operator === is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.

- The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: value !== 4.

- Just like addition, there are different operators you can use for subtraction. The subtraction assignment operator -= subtracts the given value from the current variable value, then assigns the result back to the variable.

- Because you are only subtracting one from i, you can use the decrement operator --.

# Data types

# Boolean (true or false)

- "false" is a string, which when evaluated to a boolean becomes true. This means "false" is a truthy value.

- A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.

A falsy value is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.

# If Statements

- An if statement allows you to run a block of code only when a condition is met. They use the following syntax:

Example Code
if (condition) {
logic
}

- In addition to if statements, JavaScript also has else if statements. else if statements allow you to check multiple conditions in a single block of code.

Here is the syntax for an else if statement:

Example Code
if (condition1) {
// code to run if condition1 is true
} else if (condition2) {
// code to run if condition2 is true
} else if (condition3) {
// code to run if condition3 is true
}

- ometimes you will want to run different code when all of the if...else if conditions are false. You can do this by adding an else block.

An else block will only evaluate if the conditions in the if and else if blocks are not met.

Here the else block is added to the else if block.

if (condition) {
// this code will run if condition is true
} else if (condition2) {
// this code will run if the first condition is false
} else {
// this code will run
// if the first and second conditions are false
}
