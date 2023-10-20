(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Johny Bravo', 'Naruto Uzumaki', 'Charles Lee Ray', 'Christopher Jackson'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let nameIndex = 0; nameIndex < names.length - 1; nameIndex++) {
        console.log(names[nameIndex]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach((name) => {
        console.log(name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(...names) {
        console.log(names[0]);
        return names[0];
    }

    function second(...names) {
        console.log(names[1]);
        return names[1];
    }

    function last(...names) {
        console.log(names[names.length - 1]);
        return names[names.length - 1];
    }

    first(...names);
    second(...names);
    last(...names);
})();