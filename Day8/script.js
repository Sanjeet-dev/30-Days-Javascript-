//Day 8 ES6
// Template Literals
const id = "Mukesh Pandey";
const age = 47;
const str =`Person's Name: ${id}\n Person's age: ${age} `;
console.log("Template literal based string: ",str);

// muliti line string using template literal
const multiline = `
How to start learning web development?
- Learn HTML
- Learn CSS
- Learn JavaScript
Use chaicode to learn all the above and much more.
`;
console.log(multiline);

// DESTRUCTURING
const list = [24,12,21,16,15,20,31];
const [first, second, ...restNum] = list;
console.log(first+" "+second);

const book = {
    title: "Crime and Punishement",
    author: "Fyodor Dostoevsky"
}
const {title,author} = book;
console.log(`Title of the book: ${title}\n Author of the book: ${author}`);

// Spread and Rest Operator