// 1. Code Blocks
let a = 1;
let b = a++;
let c = ++a;
console.log(a);
console.log(b);
console.log(c);

// 3
// 1
// 3

let d = "hello";
let e = false;

d++;
e++;

// 0

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

//NaN

let price = 2.7;
price.toFixed(2);

// '2.70'

let price = "2.7";
price.toFixed(2);

// VM409:2 Uncaught TypeError: price.toFixed is not a function
// at <anonymous>:2:7

isNaN(0)

isNaN(1)

isNaN("")

isNaN("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

// 2. Execute the following statement in the Chrome JavaScript console and then follow the directions below.

// Use .length to find the number of characters in the string.
//     Try to make the sample string all upper or all lower case.
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
//     Replace "Students" with "Class".
//     Find the index of "c" using .indexOf(). What do you observe?
//     Find the index of "C" using .indexOf().
//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().

// find length
let sample = "Hello Codeup";
let sampleLength = sample.length;
console.log(sampleLength);

// length 12

// uppercase and lowercase

let upperCaseSample = sample.toUpperCase();
let lowerCaseSample = sample.toLowerCase();

console.log(upperCaseSample);
console.log(lowerCaseSample);

//  add Students to sample variable
sample = sample.concat(" Students");

console.log(sample);

// replace Students with Class
sample = sample.replace("Students","Class");

console.log(sample);

// Find the index of "c" using .indexOf(). What do you observe?

console.log(sample.indexOf('c'))

// you get -1 because there is no lowercase c and when javaScript cant find something the return value is -1

console.log(sample.indexOf('C'))

// 6, index of string starts at 0

let codeUpCutOut = sample.substring(sample.indexOf('C'), sample.indexOf('p')+1)

console.log(codeUpCutOut);

// Codeup

// 3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
// a. You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// b. Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// a.
let dailyCost = 3;
let rentedMovies = [{'movieName': 'Brother Bear', daysRented: 5}, {'movieName': 'Little Mermaid', daysRented: 3}, {'movieName': 'Hercules', daysRented: 1}];

let totalCost = 0;

for (const rentedMovie of rentedMovies) {
    totalCost += dailyCost * rentedMovie.daysRented;
}

console.log(totalCost);

// b.
let wagesPaid = 0;
let companies= [{"name": "Google", hourlyWage: 400, hoursWorked: 6},{"name": "Amazon", hourlyWage: 380, hoursWorked: 4},{"name": "Facebook", hourlyWage: 350, hoursWorked: 10}]

for (const company of companies) {
    wagesPaid += company.hourlyWage * company.hoursWorked;
}

console.log(wagesPaid);

// Use the following code to follow the instructions below:

// Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

let username = 'codeup';
let password = 'notastrongpassword';

let validationLengthAtLeast5Characters = password.length >= 5;
let validationUsernameNotContainedInPassword = !password.toLowerCase().includes(username.toLowerCase());
let validationLengthLessThan20Characters = password.length <= 20;
let validationNoWhiteSpace = !!password.trim() && !password.includes(" ");
console.log(validationLengthAtLeast5Characters);
console.log(validationUsernameNotContainedInPassword);
console.log(validationLengthLessThan20Characters);
console.log(validationNoWhiteSpace);
if(!(validationLengthAtLeast5Characters && validationUsernameNotContainedInPassword && validationLengthLessThan20Characters&& validationNoWhiteSpace)){
    console.log('password doesn\'t pass all validation tests.')
}else{
    console.log('password passes validation test.')
}



