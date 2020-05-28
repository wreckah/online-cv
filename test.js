const books = [
  'Book1',
  'Super Book',
  'Book2',
];

function searchBook(prefix) {
  for (const book of books) {
    if (book.startsWith(prefix)) {
      return book;
    }
  }
  return null;
}

console.log(searchBook('Book'));
console.log(searchBook('Super'));
console.log(searchBook('Notepad'));
