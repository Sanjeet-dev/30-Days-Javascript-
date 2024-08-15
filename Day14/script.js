// Day 14 Classes
// class definition
class Person{
    constructor(name,age,firstname,lastname){
        this.name = name;
        this.age = age;
        this._fullname = `${firstname} ${lastname}`;

    }

    get fullName(){
        console.log("getter method called");
        return `${this._fullname}`;
    }

    set fullName(val){
        console.log("setter called");
        this._fullname = val;
        

    }

    greet(){
        return(`Hello ${this.name}! Nice to meet you.`);
    }
    updatingAge(val){
        this.age = val;
        return this.age;
    }

    // static method
    static welcome(){
        return `Generic greeting message`;
    }

}

const person1 = new Person("Sumit",28);
console.log(person1.name);
console.log(person1.greet());
const newAge = person1.updatingAge(20);
console.log("The new age of a person is: ", newAge);


// class Inheritance
class Student extends Person{
    static noOfStudnets = 0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
        Student.noOfStudnets++;
    }
    Id(){
        return this.studentId;
    }
    greet(){
        return (`Hello I am ${this.name} with id ${this.studentId}.`)
    }
}

const student = new Student("Kundan",15,221015);
const stu1 = new Student("xyz",23,211145);
console.log("this is id of a Student:",student.Id());
console.log(student.greet());

// Static methods and Properties
//static methods can be called without creating an instance of a class.
console.log("static method message:",Person.welcome());
console.log("static property:", Student.noOfStudnets);

// Getters and Setters
const person2 = new Person("x",25,"Neha","sharma");
console.log(person2.fullName);
person2.fullName = "Rachel Pizzolato";
console.log(person2.fullName);
