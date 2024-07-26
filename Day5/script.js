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
