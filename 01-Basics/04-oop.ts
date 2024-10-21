// ***** Class *****
class Person {
	// Define class variable with type
	name: string;
	age: number;
	// Constructor function doesn't have return type
	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}
	// Class method doesn't need to use 'function' keyword
	getName(): string{												// Class method has return type
		return this.name;
	}
}
// Creating object from class
let person1: Person = new Person("Ram KC", 21);
console.log("Class Object Info: ", person1.name);
console.log("Class Object Info: ", person1.age);


// ***** Visibility (Access Modifier) *****
// In typescript, there are following access modifier: public, private and protected
class Vehicle {
	// Define class variable with type
	private name: string;
	private speed: number;
	// Constructor function doesn't have return type
	public constructor(name: string, speed: number){
		this.name = name;
		this.speed = speed;
	}
	// Class method doesn't need to use 'function' keyword
	public getName(): string{
		return this.name;
	}
	public getSpeed(): number{
		return this.speed;
	}
}
// Creating object from class
let car1: Vehicle = new Vehicle("Lambo", 210);
console.log("Object with Access Modifier Info: ", car1.getName());					// Can't access the private vehicle directly
console.log("Object with Access Modifier Info: ", car1.getSpeed());


// ***** Parameter Properties *****
// Properties of class can be defined in class constructor parameter (But, requires access modifier)
class Employee{

	// Here, 'name' and 'salary' property is automatically created 
	public constructor(private name: string, private salary: number){
		this.name = name;
		this.salary = salary;
	}
	public getName(): string
	{
		return this.name;
	}
	public getSalary(): number{
		return this.salary;
	}
}
let emp1: Employee = new Employee("Hari Shrestha", 900000);
console.log("Object with Parameter Property: ", emp1.getName());					// Can't access the private vehicle directly
console.log("Object with Parameter Property: ", emp1.getSalary());


// ***** Inheritance with Interface *****
interface Shape{
	getArea(): number;								// Interface has undefined method that returns number
}
// We need to use 'implements' keyword for inheriting interface
class Rectangle implements Shape{
	private length: number;
	private breadth: number;

	public constructor(lenght: number, breadth: number)
	{
		this.length = lenght;
		this.breadth = breadth;
	}
	// Implemet the interface's method
	getArea(): number {
		return (this.length * this.breadth);
	}
}

let r1: Rectangle = new Rectangle(10, 20);
console.log("Interfce inherited rectangle area: " + r1.getArea());


// ***** Inheritance with Class *****
// We need to use 'extends' keyword for inheriting class
class Square extends Rectangle{
	public constructor(lenght: number)
	{
		super(lenght, lenght);
	}
}

let s1: Square = new Square(20);
console.log("Class inherited square area: " + s1.getArea());


// ***** Method Overriding *****
class Engine{
	public start(): void{
		console.log("Engine Starting");
	}
}

class Bike extends Engine{
	// 'override' keyword to override the method
	public override start(): void {
		console.log("Bike Starting");
	}
}

let b1: Bike = new Bike();
console.log("Method Overriding Bike Start: " );
b1.start();


// ***** Abstract Class *****
abstract class University{
	
	// Undefined abstract method for abstract class
	public abstract getName(): string; 
} 

class College extends University{
	private name: string;
	
	public constructor(name: string){
		super();
		this.name = name;
	}
	public getName(): string{
		return this.name;
	}
}

let col1: College = new College("My College");
console.log("Abstract Class college name: " + col1.getName());


// ***** Static Members *****
class Factory{
	public static count: number = 0;

	public constructor(){
		// Access the static member inside non-static method using Class Name
		Factory.count++;
	}
}

let f1: Factory = new Factory();
let f2: Factory = new Factory();
let f3: Factory = new Factory();
// Access static member (property or method) using class name
console.log("Static Member object count: " + Factory.count);