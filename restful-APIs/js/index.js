import {getBookAndAuthor, getAllBooksAndAuthors, createBook, updateBook, deleteBook} from './books-api.js';

// gets book and author

const book = await getBookAndAuthor(1).catch(err => console.log(err));
console.log(book);

// gets all books and authors
const booksAndAuthors = await getAllBooksAndAuthors().catch(err => console.log(err));
console.log(booksAndAuthors);

// new book
const newBook = await createBook({
    title: 'The Great Gatsby',
    authorId: 5,
    publishedYear: 1925,
    genre: 'Tragedy',
    summary: 'A tragic love story set in the roaring twenties.',
    ISBN: '9780743273565'
});
console.log(newBook);

//update book

const updatedNewBook = await updateBook(newBook.id, {
    title: newBook.title,
    authorId: newBook.authorId,
    publishedYear: newBook.publishedYear,
    genre: newBook.genre,
    summary: 'A tragic love story set in the roaring twenties. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
    ISBN: newBook.ISBN
});
console.log(updatedNewBook);


const deletedNewBook = await deleteBook(updatedNewBook.id);
console.log(`"${deletedNewBook.title}" has been deleted.`);