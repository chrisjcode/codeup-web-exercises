(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: 'Christopher',
        lastName: 'Jackson'
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = () => `Hello from ${person.firstName} ${person.lastName}`;
    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((shopper) => {
        let originalPrice = shopper.amount;
        let totalPriceMessage = `The amount of ${shopper.name}'s items purchased is $${shopper.amount}. `;
        let discountMessage = '';
        let eligibleDiscount = .12;
        if (originalPrice > 200) {
            let discountedPrice = originalPrice - (originalPrice * eligibleDiscount);
            discountMessage = `${shopper.name} received a discount of 12% and will now pay $${discountedPrice}`;
        } else {
            discountMessage = `No discount received. ${shopper.name} will pay $${originalPrice}`;
        }

        totalPriceMessage += discountMessage
        console.log(totalPriceMessage);
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [{title: 'Moby-Dick', author: {firstName: 'Herman', lastName: 'Melville'}}, {
        title: 'Hangman',
        author: {firstName: 'Maya', lastName: 'Binyam'}
    }, {title: 'Space Brat', author: {firstName: 'Bruce', lastName: 'Coville'}}, {
        title: 'THe Enchanters',
        author: {firstName: 'James', lastName: 'Ellroy'}
    }, {title: 'Devil Makes Three', author: {firstName: 'Ben', lastName: 'Fountain'}}];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    let bookList = "";
    books.forEach((bookDetail, index) => {
        bookList += `
         Book ${++index}
         Title: ${bookDetail.title}
         Author: ${bookDetail.author.firstName} ${bookDetail.author.lastName}
         --------------------------------------------------------------------
        `
    });

    console.log(bookList);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook({title, author}) {
        return {title, author};
    }

    function showBookInfo({title, author}, index) {
        console.log(`
         Book ${++index}
         Title: ${title}
         Author: ${author.firstName} ${author.lastName}
         ------------------------------------------------------------
        `)
    }

    let newBooks = [];

    let bookQuantity = prompt("How many books would you like to add?");

    for (let bookCounter = 0; bookCounter < parseInt(bookQuantity); bookCounter++) {
        let title = prompt(`What is the title of the book number ${bookCounter + 1}`);
        let author = {};
        author.firstName = prompt(`What is the first name of the author of ${title}`);
        author.lastName = prompt(`What is the last name of the author of ${title}?`);
        newBooks.push(createBook({title, author}));
    }

    newBooks.forEach((bookDetail, index) => {
        showBookInfo(bookDetail, index);
    });

    alert('Your books have been listed');

})();