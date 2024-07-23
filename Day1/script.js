//1 variable declaration
var firstVar = 25;
let esVar = 46;
console.log("var varible: "+firstVar+ " let varible:"+ esVar);

//2 constant declaration
const constVar = true;
console.log("const variable: "+ constVar);

//3 Data Types
let num1 = 78;
console.log(num1+" "+typeof(num1));
let str1 = "hello there";
console.log(str1+" "+typeof(str1));
let boolVal = false;
console.log(boolVal+" "+typeof(boolVal));
let obj1 = {
    "Name":"John Doe",
    "Address": "San Francisco",
    "Social": ["Facebook","Github","Pinterest","Reddit"],
    "Marital Status": "Unmarried",
    "Language": function(){
        console.log("can speack multiple languages Hebrew,English,Arabic,Hindi,Urdu,German");
    }

}
console.log(typeof(obj1));
console.log(obj1.Language);

let arr1 = ["Ram","Shyam","Ravi","Kishan","Manoj","Ravikant"];
console.log(typeof(arr1));

//Reassigning variables
let fameGame = "Show your Influence";
console.log("before assigna: "+fameGame);
fameGame = "Become a attention seeker";
console.log("after reassign: "+ fameGame);

// Understanding const
const val = 78;
val = 75;
console.log(val);
