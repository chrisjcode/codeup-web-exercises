"use strict";

// create function named sum that takes in two numbers and returns the sum of the two numbers
function sum(num1, num2){
    return num1 + num2;
}

// Calling the function / Execute the function

console.log(sum(21,23));

//Create a function fullName that takes two inputs, a first name and a last name, both concatinated together

// Function Decleration
function fullName(firstName, lastName){
    return `${firstName + lastName}`;
}

console.log(fullName("Christopher", "Jackson"));

//  Annonymous
const decrement = function (input) {
    return input-1;
}

console.log(JSON.stringify(decrement))

//Arrow Functions

const fullName = (firstName, lastName) => {
    return `${firstName + lastName}`;
}
// oe line arrow function
cosnt fullName = (firstName, lastName ) => `${firstName + lastName}`;
// long arrow
cosnt fullName = ( firstName, lastName) =>{
    return `${firstName + lastName}`;
}

//create a
let word = "Im Ready To Go To Lunch"
const lowerCase = function (str){
   word = str.toLowerCase();
}

lowerCase(word);

console.log(word);

// arrow function
const lowerCase =  (str) =>{
    word = str.toLowerCase();
}