// For Loop
for(let i=1; i<=10; i++){
    console.log(i+" ");
}

let num = 8;
for(let i=1; i<=10; i++){
    console.log(`8 x ${i} = ${num*i}`);
}

// While Loop
// sum using while
let sum = 0;
let last = 10;

while(last != 0){
    sum+=last;
    last--;
}
console.log("the sum of numbers from 1 to 10 is: "+sum);

// ulti ginti
let num10 = 10;
while(num10 != 0){
    console.log(num10);
    num10--;
}

// Do While
let do1 = 1;
do{
console.log(do1);
do1++;
}while(do1<=5);

// factorial of a number;
let number = 5;
let fact=1;
let i=1;
do{
    fact=fact*i;
    i++;
}while(i<=number);
console.log(`The factorial of a ${number} is ${fact}.`);

// nested loop
