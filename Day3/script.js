// if else statements

// check number  if it is positive, negative or zero
let num = -55;
if(num > 0){
    console.log("positive number: ", num);
}else{
    console.log("Either of them zero or negative number", num);
}

// To check if a person is eligible to vote (age >= 18) and log the result
const age = 21;
if(age<18){
    console.log("Candidate is not ready for voting due to age");
}else{
    console.log("Ready to vote");
}
// largest of three

let a = 22;
let b = 83;
let c = 82;
if(a>b && a>c){
    console.log("largest of three is: ",a);
}else if(b>a && b>c){
    console.log("Largest of three is: ",b);
}else{
    console.log("Largest of three is: ",c);
}

// switch case
let day = new Date().getDay();

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

let score = 90;
switch(score){
    case 90:
        console.log('A');
        break;
    case 80:
        console.log('B');
        break;
    case 70:
        console.log('C');
        break;
    case 60:
        console.log('D');
        break;
    case 50:
        console.log('E');
        break;
    default:
        console.log('F');
        break;
}

// Conditional (Ternary) Operator
let Num = 4;
let result = Num%2==0?"even":"odd";
console.log(result);

// combining conditions

let year = new Date().getFullYear();
console.log(year);

if(year%4 === 0 && year%100!==0 && year%400===0){
    console.log("This year is leap year");
}else{
    console.log("Not a leap year");
}