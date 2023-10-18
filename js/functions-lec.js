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

/*const fullName = (firstName, lastName) => {
    return `${firstName + lastName}`;
}
// oe line arrow function
const fullName = (firstName, lastName ) => `${firstName + lastName}`;*/
// long arrow
const fullName = ( firstName, lastName) =>{
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
const lowerCase = (str) => str.toLowerCase();
const lowerCase = (str) => { str.toLowerCase()};

// default values
function greeting(greeting = 'Yo Yo'){
    return greeting;
}

console.log(greeting());
console.log(greeting('Hey Hey'));

//Scope
// Global Scope
let globalScope;
function test(){
    let functionScope = 'a'

    if(true){
        let blockScope = 'a'
    }

    setTimeout(() => {
        console.log(functionScope);
        console.log(blockScope);

    }, 1000);
}

// console.log(localScope);


