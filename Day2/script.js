// Arithmetic Operation
let num1 = 5;
let num2 = 7;
console.log("Sum of two numbers: "+ num1+num2);
console.log("Difference of two numbers: ",num2-num1);
console.log("Product of two numbers: "+ num1*num2);
console.log("Division of two numbers: "+ num2/num1);
console.log("Remainder of two numbers: "+ num2%num1);

// Assignment Operators
num1 += num2;
console.log(num1);

num1 -= num2;
console.log(num2);

// comparison operators
let comNum1 = 55;
let comNum2 = 51;

if(comNum1 > comNum2){
    console.log("comNum1 is greater than comNum2", comNum1);
}
else if(comNum2 < comNum1){
    console.log("comNum2 is less than comNum1");
}

// == and === difference
let no = 46;
let strNo = "46";
console.log(no == strNo);
console.log(no === strNo);

// Ternary Operator
let ter = -7;

const result = ter>0?"positive number":"negative number";
console.log(result);