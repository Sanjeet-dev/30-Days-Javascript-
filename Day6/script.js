// Array creation and access
const arr0 = [1,2,3,4,5];
console.log(arr0);

const first = arr0[0];
const last = arr0[arr0.length-1];
console.log(first+" "+last);

// Array Methods(Basics)
arr0.push(6);
console.log("updated array: "+arr0);

arr0.pop();
console.log("poped up array: "+arr0);

arr0.shift(arr0[0]);
console.log("Using shift method: "+arr0);

arr0.unshift(0);
console.log("Using shift method: "+arr0);

// Array Methods(Intermediate)
//map
const arr1 = [6,7,8,9,10];
const mappedArray =arr1.map((val)=>
    val*2
);
console.log(`Mapping the array with doubling the values: ${mappedArray}`);

const filteredArray = arr1.filter((num)=>num%2==0);
console.log("Filtering those number divisible by 2: ", filteredArray);

const reducedArray = arr1.reduce((prev,curr)=> prev+curr);
console.log("Reduce function effect: ",reducedArray);

// Array Iteration
const arr2 = ["Apple","Orange","Tangerine","Pineapple","Lichi"];
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}
//for each
arr2.forEach((fruit)=>{
    console.log(fruit)
 }
);

// Multi Dimensional Array

const TwoDArray = [[0,1,2,3,4],[5,6,7,8,9]];
console.log(TwoDArray);

const secondThird = TwoDArray[1][2];
console.log("specific element: ",secondThird);
