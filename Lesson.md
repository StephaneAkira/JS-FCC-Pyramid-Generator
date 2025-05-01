# Every explanation regarding the Project will go here

# Important Notes:

- JavaScript has seven primitive data types, with String being one of them.

- Note that when reassigning a variable, you do not use the let keyword again.

- strings are immutable while arrays aren't

# Variables

- Declaring a variable means giving it a name. In JavaScript, this is often done with the let keyword. For example, here is how you would declare a hello variable:

- Example Code
  let hello;
  Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.

- The default value of an uninitialized variable is undefined. This is a special data type that represents a value that does not have a definition yet.

- Declaring a variable with the let keyword allows it to be reassigned. This means you could change character later to be a completely different value.

- A const variable also cannot be uninitialized

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

# .pop()

Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.
