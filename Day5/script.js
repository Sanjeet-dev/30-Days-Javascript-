// Function/Activities
function evenOdd(num){
    return (num%2==0?"even":"odd");
}
console.log(evenOdd(17));

function powerTwo(num1){
    return num1*num1;
}
console.log(powerTwo(8));

// Function Expression
function maxNumber(a,b){
    return a>b?a:b;
}
console.log(maxNumber(4,9));

function addStrings(str1,str2){
  return str1+" "+str2;
}
console.log(addStrings("Hello","World"));

// Arrow Functions
const add = (c,d) => {
    return c+d;
}
console.log(add(57,73));

const contain = (str) => {
    return str.includes("pandey");
}
console.log(contain("Saurabh"));

// Function Parameters and Default Values
function product( e, f=5){
    return e*f;
}
console.log(product(4,7));

function greeting(name,age=28){
    const result = `Hello ${name}! I think your age is around ${age}.`;
    return result;
}
console.log(greeting("Sanjeet"));

// Higher order functions
function order(fn,val){
    for(let i=0; i<val; i++){
        fn();
    }
}

function sayHello(){
    console.log("Hello World!");
}
order(sayHello,5);

function multipleFunctions(func1,func2,value){
    return func1(func2(value));
}
const multiplyBy5 = (val) => val*5;
const add10 = (val) => val+10;

const res = multipleFunctions(multiplyBy5,add10,5);
console.log(res);



