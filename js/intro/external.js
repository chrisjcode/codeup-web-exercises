console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

let prompter = prompt('Hey what is your favorite color?');

alert(`Woah! ${prompter} is my favorite color too`);

// Prompt practice

let dailyCost = 3;
let rentedMovies = [{'movieName': 'Brother Bear', daysRented: 5}, {'movieName': 'Little Mermaid', daysRented: 3}, {'movieName': 'Hercules', daysRented: 1}];

let totalCost = 0;

for (const rentedMovie of rentedMovies) {
    let userInput = prompt(`How many days did you rent out ${rentedMovie.movieName}?`);
    totalCost += dailyCost * parseInt(userInput);
}

alert(`Your total cost is ${totalCost}.`);

// b.
let wagesPaid = 0;
let companies= [{"name": "Google", hourlyWage: 400, hoursWorked: 6},{"name": "Amazon", hourlyWage: 380, hoursWorked: 4},{"name": "Facebook", hourlyWage: 350, hoursWorked: 10}]

for (const company of companies) {
    let userInput = prompt(`How many hours did you work at ${company.name}?`);
    wagesPaid += company.hourlyWage * parseInt(userInput);
}

alert(`Your total pay this period is ${wagesPaid.toFixed(2)}.`);

function trueParseInt(input){
    if(!input){
        console.log('NaN');
        return NaN;
    }
    for (let charIndex = 0; charIndex < input.length; charIndex++) {
        console.log(input.charAt(charIndex))
       if(typeof parseInt(input.charAt(charIndex)) === 'number') {
           console.log(parseInt(input.substring(charIndex, input.length)))
           return parseInt(input.substring(charIndex, input.length));
       }
    }
    console.log('NaN');
    return NaN;
}

// trueParseInt("scwcw098");trueParseInt("");trueParseInt('ece8kijkm');