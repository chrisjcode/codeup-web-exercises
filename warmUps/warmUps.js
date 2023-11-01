// Christopher Jackson
//  Daily Warmups

// Nov 1

// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.
//


//     Data Structure/Example Input:
    let developers = [
        {
            name: "Jonathan",
            languages: {
                frontend: ["HTML", "JavaScript", "CSS"],
                backend: ["Java"]
            }
        },
        {
            name: "Bonnie",
            languages: {
                frontend: ["JavaScript"],
                backend: []
            }
        },
        {
            name: "Raj",
            languages: {
                frontend: [],
                backend: ["C#", "Java", "Python"]
            }
        },
        {
            name: "Carmen",
            languages: {
                frontend: ["JavaScript", "HTML", "CSS", "React"],
                backend: ["C#", "Java", "Python", "TypeScript"]
            }
        },
    ]


let javaScriptGurusList = (...developers) => {
    let javaScriptGurusList = [];

    let javaScriptUsers = developers.filter((developer) => developer.languages.frontend.find((language) => language === "JavaScript")).map((developer) => developer.name);

    console.log(javaScriptUsers);

    developers.forEach((element) => {
        if(element.languages?.frontend?.includes('JavaScript')){
            javaScriptGurusList.push(element.name);
        }
    })
    return javaScriptGurusList;

}

console.log(javaScriptGurusList(...developers));







// Oct 24

let cars = [{
    make: 'BMW',
    model: '228i',
    color: 'black',

},
    {
        make: 'Dodge',
        model: 'Viper',
        color: 'blue',

    },
    {
        make: 'Lamborghini',
        model: 'Diablo',
        color: 'yellow',

    }]

for (const car of cars) {
    console.log(` I love the ${car.make} ${car.model} in ${car.color}.`)
}

// oct 23

let movieArray = ["Major Payne", "Ace Ventura", "Toy Story", "Small Soldiers", "Catch Me If You Can"];

movieArray.sort().forEach((movie) => {
    console.log(movie);
});

// oct 20

function logEvenNumbers() {
    let evenArray = [];
    for (let num = 1; num < 100; num++) {
        if (!(num % 2)) {
            evenArray.push(num);
        }
    }
    return evenArray;
}

console.log(logEvenNumbers());


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



