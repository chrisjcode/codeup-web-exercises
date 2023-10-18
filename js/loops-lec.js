// while
/*let i = 0;

while (i < 10){
    i++;
}*/

//do while loops

/*
let i = 12;

do{
    console.log(i);
    i++;
}while(i<10);*/

// mini exercise

/*
* create a variable called num that is equal to zero
* Write a while loop that increments num by 5 as long as num is less than 100
* Do the same thing as do-while
*
* */

// let example1Num = 0;
//
// while (example1Num < 100) {
//     example1Num += 5;
//     console.log(example1Num);
// }
//
// let example2Num = 0;
// do {
//     example2Num += 5;
//     console.log(example2Num);
// }while(example2Num < 100)


const secretNumber = 7;
let guess;

// do-while loop

do {
    guess = parseInt(prompt('Guess the secret number (1-10):'));
    if (!Number.isNaN(guess)) {
        if (guess && guess === secretNumber) {
            console.log("You have guessed the correct answer.");
        } else if (guess < secretNumber) {
            console.log("Higher Number");
        } else if (guess > secretNumber) {
            console.log("Lower Number");
        }
    } else {
        console.log("Guess a number");
    }

} while (guess !== secretNumber)

