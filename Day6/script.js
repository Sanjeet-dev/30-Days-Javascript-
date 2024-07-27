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