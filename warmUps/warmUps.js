// Christopher Jackson
//  Daily Warmups

// oct 20

function logEvenNumbers () {
    let evenArray = [];
    for (let num = 1; num < 100; num++) {
        if(!(num % 2)){
            evenArray.push(num);
        }
    }
    console.log(evenArray);
}

console.log(logEvenNumbers);


// oct 19

let num = 100;

while (num) {
    num -= 5;
    console.log(!(num % 2) ? `${num} is even` : num);



// Oct 12

let firstName = "Christopher";

let lastName = "Jackson";

let graduationYear = '2005';

let message = `My name is ${firstName + lastName}, and I graduted highscool ${graduationYear}`;

console.log(message);

}



