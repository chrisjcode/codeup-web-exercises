//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:

let userInput;

function getOddNumberFromUser() {
    userInput = prompt('Enter and Odd Number between 1 and 50');
}

function validateInput() {
    let parsedInput = parseInt(userInput);
    console.log(parsedInput);
    if (!(parsedInput % 2)) {
        alert('The number you type is even');
    } else if (parsedInput > 50) {
        alert('The number you is greater than 50');
    } else if (parsedInput < 1) {
        alert('The number you is less than 1');
    } else if (Number.isNaN(parsedInput)) {
        alert('This is not a number');
    } else {
        return true;
    }
}



function loopNumbers() {
    do{
        getOddNumberFromUser();
    }while(!validateInput())

        let parsedInt = parseInt(userInput);
        for (let i = 1; i <= 50; i++) {
            if (parsedInt % 2) {
                if (i === parsedInt) {
                    console.log(`Yikes! Skipping ${i}`)
                    continue;
                }
                console.log(`Here is an odd number ${i}`);
            }
        }
}

loopNumbers();

