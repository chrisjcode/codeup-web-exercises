const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//  unshift add to the front of array
console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Sunday' to the beginning of the week
daysOfTheWeek.unshift('Sunday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Friday' and 'Saturday' to the end of the week
daysOfTheWeek.push('Friday', 'Saturday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


// pop() - removes content from last index
// shift() removes content from first index

//slice - copy elements from an array and put it into a new array

// array.slice(index1,index4) index1 starts and grabs that index and get alll content up to before index2

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let slice = colors.slice(2, 4);

console.log(colors); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(slice); // ['yellow', 'green']

slice = colors.slice(3);
console.log(slice); // ['green', 'blue', 'indigo', 'violet']

slice.sort();


 colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// ascending sort function a < b ? -1 : a > b ? 1 : 0;
// ascending sort function a > b ? -1 : a < b ? 1 : 0;
 descendingSort = (a,b)=> {
    return a > b ? -1 : a < b ? 1 : 0;
}
console.log('Sorting the colors array.');

colors.sort(descendingSort);

console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']



let namesString = "Joe,Bob,Sally";

console.log(namesString);
// comma denotes the place to seperate the string (delimiter)
// Joe,Bob,Sally

 namesArray = namesString.split(',');

console.log(namesArray);


 namesArray = ['Joe', 'Bob', 'Sally'];

console.log(namesArray);

// ['Joe', 'Bob', 'Sally']

namesArray = namesArray.join(',');

console.log(namesArray);
//  join will use delimeter(comma) to seperate data of the indexes
// Joe,Bob,Sally