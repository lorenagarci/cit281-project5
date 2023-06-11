class Book {
  constructor(title, author, pubDate, isbn) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = ""} = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate };
      this._books.push(newBook);
    }
  }
  listBooks() {
    for (const book of this._books) {
      const {title, author, pubDate, isbn} = book;
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}`)
    }
  }

  deleteBook(isbn = "") {
    let tempBooks = [];
    for (const book of this._books) {
      if (book.isbn !== isbn) {
        tempBooks.push(book);
      }
    }
    this._books = tempBooks; // Update the books array after deleting
  }
}

// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const itEndsWithUs = new Book("It Ends With Us", "Colleen Hoover", "02/29/2016", "9783423283434");
const theFaultinOurStars = new Book("The Fault in Our Stars", "John Green", "01/10/2012", "9780142424179");

// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(itEndsWithUs);
library.addBook(theFaultinOurStars);
console.log(`Book count: ${library.count}`);
library.listBooks();

console.log(atomicHabits);
console.log(library._books);

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();