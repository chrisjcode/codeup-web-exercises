const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// 1.
console.log(users.filter((user) => user.languages.length >= 3));
// 2.
console.log(users.map((user) => user.email));
// 3.
let initialValue = 0;
const totalYearsExperience = users.reduce(
    (totalYears, user) => totalYears + user.yearsOfExperience,
    initialValue,
);
let average = totalYearsExperience / users.length
console.log(average);

// 4.
initialValue = 0;
const longestEmail = users.reduce(
    (longestStringLength, user) => longestStringLength = (user.email.length > initialValue && user.email.length > longestStringLength ? user.email.length : longestStringLength),
    initialValue,
);
// let average = totalYearsExperience / users.length
console.log(users.find((user) => user.email.length === 19).email);

// 5.

// https://stackoverflow.com/questions/38270089/reduce-array-to-a-single-string

let userString = users.reduce(function(prevVal,currVal,idx){
    return idx === 0 ? currVal.name : prevVal + ', ' + currVal.name;
}, '')

console.log(userString);