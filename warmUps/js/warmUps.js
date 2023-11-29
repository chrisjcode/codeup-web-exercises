// Christopher Jackson
//  Daily Warmups

// Nov 29

let todos = [];

function createToDos(todos) {
    console.log(todos)
    let todosContainer = document.getElementById('todos');
    todos.forEach((todo) => {
        console.log(todo);
        todosContainer.appendChild(document.createElement('h1')).innerHTML = todo.name;
        todosContainer.appendChild(document.createElement('p')).innerHTML = todo.date;
    })

}
 fetch("../ajax/data/todo.json")
    .then(response => response.json())
    .then(data => createToDos(todos = data))
    .catch(err => console.log(err));


// Nov 28 Pokemon API add and image
let pokemon = document.getElementById('pokemon');

// get response and then th data
fetch("https://pokeapi.co/api/v2/pokemon/mew")
    .then(response => response.json())
    .then(data => pokemon.src = data.sprites.front_default)
    .catch(err => console.log(err)); // print your data


// Nov 6

// FizzBuzz

let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz(100);


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

    // let javaScriptGurusList = [];
    // developers.forEach((element) => {
    //     if(element.languages?.frontend?.includes('JavaScript')){
    //         javaScriptGurusList.push(element.name);
    //     }
    // })
    return developers
        .filter((developer) => developer.languages.frontend
            .find((language) => language === "JavaScript"))
        .map((developer) => developer.name);
}

// console.log(javaScriptGurusList(...developers));


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
    // console.log(` I love the ${car.make} ${car.model} in ${car.color}.`)
}

// oct 23

let movieArray = ["Major Payne", "Ace Ventura", "Toy Story", "Small Soldiers", "Catch Me If You Can"];

movieArray.sort().forEach((movie) => {
    // console.log(movie);
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

// console.log(logEvenNumbers());


// oct 19

let num = 100;

while (num) {
    num -= 5;
    // console.log(!(num % 2) ? `${num} is even` : num);


// Oct 12

    let firstName = "Christopher";

    let lastName = "Jackson";

    let graduationYear = '2005';

    let message = `My name is ${firstName + lastName}, and I graduted highscool ${graduationYear}`;

    // console.log(message);

}



