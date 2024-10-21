"use strict";
// ***** Class *****
class Person {
    // Constructor function doesn't have return type
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Class method doesn't need to use 'function' keyword
    getName() {
        return this.name;
    }
}
// Creating object from class
let person1 = new Person("Ram KC", 21);
console.log("Class Object Info: ", person1.name);
console.log("Class Object Info: ", person1.age);
// ***** Visibility (Access Modifier) *****
// In typescript, there are following access modifier: public, private and protected
class Vehicle {
    // Constructor function doesn't have return type
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    // Class method doesn't need to use 'function' keyword
    getName() {
        return this.name;
    }
    getSpeed() {
        return this.speed;
    }
}
// Creating object from class
let car1 = new Vehicle("Lambo", 210);
console.log("Object with Access Modifier Info: ", car1.getName()); // Can't access the private vehicle directly
console.log("Object with Access Modifier Info: ", car1.getSpeed());
// ***** Parameter Properties *****
// Properties of class can be defined in class constructor parameter (But, requires access modifier)
class Employee {
    // Here, 'name' and 'salary' property is automatically created 
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
}
let emp1 = new Employee("Hari Shrestha", 900000);
console.log("Object with Parameter Property: ", emp1.getName()); // Can't access the private vehicle directly
console.log("Object with Parameter Property: ", emp1.getSalary());
// We need to use 'implements' keyword for inheriting interface
class Rectangle {
    constructor(lenght, breadth) {
        this.length = lenght;
        this.breadth = breadth;
    }
    // Implemet the interface's method
    getArea() {
        return (this.length * this.breadth);
    }
}
let r1 = new Rectangle(10, 20);
console.log("Interfce inherited rectangle area: " + r1.getArea());
// ***** Inheritance with Class *****
// We need to use 'extends' keyword for inheriting class
class Square extends Rectangle {
    constructor(lenght) {
        super(lenght, lenght);
    }
}
let s1 = new Square(20);
console.log("Class inherited square area: " + s1.getArea());
// ***** Method Overriding *****
class Engine {
    start() {
        console.log("Engine Starting");
    }
}
class Bike extends Engine {
    // 'override' keyword to override the method
    start() {
        console.log("Bike Starting");
    }
}
let b1 = new Bike();
console.log("Method Overriding Bike Start: ");
b1.start();
// ***** Abstract Class *****
class University {
}
class College extends University {
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let col1 = new College("My College");
console.log("Abstract Class college name: " + col1.getName());
