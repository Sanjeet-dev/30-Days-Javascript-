// Objects
// Object creation and Access
const book = {
    title: "The catcher in the rye",
    author: "J.D Salinger",
    year: 1951,  
    book_info: function(title,author){
        return title+" "+author;
    },
    publishYear: function(year){
        console.log("previous publish year: ",book.year);
        book.year = 1946;
        return book.year;
    }
};
console.log(book);
console.log(`The title of the book: ${book.title} \n Author of the book: ${book.author}`);

// Object Methods
console.log(book.book_info(book.title,book.author));
console.log(book.publishYear(book.year));

// Nested Objects
const library =  {
    name:"Banaras Central Library",
    books: [{title: "Gaban",author:"Premchand"},{title:"Five point someone",author:"Chetan Bhagat"},{title:"Lhasa ki or",author:"Rahul Sankrityayan"}]
}
console.log(library);
console.log(Object.keys(library));
console.log(Object.values(library));

console.log("Name of the Library: ",library.name);
// console.log(library.books[0].title,library.books[1].title,library.books[2].title);
for(let i=0; i<library.books.length; i++){
    console.log(library.books[i].title);
}

