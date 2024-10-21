"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_speed, _Circle_radius;
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
        _Vehicle_speed.set(this, void 0); // Another way to create private varibale is to use '#' prefix
        this.name = name;
        __classPrivateFieldSet(this, _Vehicle_speed, speed, "f");
    }
    // Class method doesn't need to use 'function' keyword
    getName() {
        return this.name;
    }
    getSpeed() {
        return __classPrivateFieldGet(this, _Vehicle_speed, "f");
    }
}
_Vehicle_speed = new WeakMap();
// Creating object from class
let car1 = new Vehicle("Lambo", 210);
console.log("Object with Access Modifier Info: ", car1.getName()); // Can't access the private vehicle directly
console.log("Object with Access Modifier Info: ", car1.getSpeed());
// ***** Getters and Setters *****
class Circle {
    constructor(radius) {
        // Private variable using '#'
        _Circle_radius.set(this, void 0);
        __classPrivateFieldSet(this, _Circle_radius, radius, "f");
    }
    // Getter method
    get rad() {
        return __classPrivateFieldGet(this, _Circle_radius, "f");
    }
    // Setter method
    set rad(radius) {
        __classPrivateFieldSet(this, _Circle_radius, radius, "f");
    }
}
_Circle_radius = new WeakMap();
let cir1 = new Circle(5);
console.log("Getter-Setter old Radius: " + cir1.rad); // Using Getter
cir1.rad = 15; // Using Setter  
console.log("Getter-Setter new Radius: " + cir1.rad);
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
// ***** Static Members *****
class Factory {
    constructor() {
        // Access the static member inside non-static method using Class Name
        Factory.count++;
    }
}
Factory.count = 0;
let f1 = new Factory();
let f2 = new Factory();
let f3 = new Factory();
// Access static member (property or method) using class name
console.log("Static Member object count: " + Factory.count);
