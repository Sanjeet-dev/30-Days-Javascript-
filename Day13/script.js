// Day 13 Modules
// Creating and Exploring Modules
export function add(a,b){
    return a+b;
}
export const PI=3.14159;

export const person = {
    name: "Suresh Dutta",
    company: "HCL",
    Hometown: "Ayodhya",
    getInfo: function(){
        console.log(this.name+" "+this.company);
    }
}

// Named and Default Exports
export function table5(){
    let i;
    for(i=1; i<=10; i++){
        console.log(i*5);

    }
}
export function product(a,b){
    return a*b;
}
export function modulo(a,b){
    return a%b;
}
