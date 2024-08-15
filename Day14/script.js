// Day 14 Classes
// class definition
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    greet(){
        return(`Hello ${this.name}! Nice to meet you.`);
    }
    updatingAge(val){
        this.age = val;
        return this.age;
    }

}

const person1 = new Person("Sumit",28);
console.log(person1.name);
console.log(person1.greet());
const newAge = person1.updatingAge(20);
console.log("The new age of a person is: ", newAge);


// class Inheritance