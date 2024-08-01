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
// spread operator
const exArr1 = [1,2,3];
const exArr2 = [...exArr1,4,5,6,7];
console.log(exArr2);
// rest operator

function sumOfN(...args){
    return args.reduce((acc,curr)=> acc+curr,0);
}
console.log(sumOfN(1,2,3,4,5));

// Default parameters
function defaultParams(num1,num2=1){
    return num1*num2;
}
console.log(defaultParams(5,9));
console.log(defaultParams(8));

// Enhanced Object Literals
const identity = "Charlie";
const umar = 83;

const info = {
    identity,
    umar,
    namaskara: function(){
        console.log(`Hello, ${this.identity}. Is your age ${this.umar} real.`);
    }
}
console.log(info);

const propName1 = "name";
const propName2 = "age";
const propName3 = "country";

const person = {
  [propName1]: "Alice",
  [propName2]: 30,
  [propName3]: "USA"
};

console.log(person);

