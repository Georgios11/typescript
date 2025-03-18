// ++++++++++ Type Annotations
let awesomeName: string = 'PAOK';
console.log(awesomeName.length);
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);
// awesomeName =3;
let amount = 3;
amount = 3 - 4;
console.log(amount);
import { z } from 'zod';
// Type Inference
// let name1 = "PAOK";

//Challenge
/**
 * - Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
- You can use type annotation or inference

 *
 */
const string1: string = 'PAOK';
console.log(string1.toLowerCase());
let age = 3;
age = age + 3;
let isAdult: boolean = age >= 18;
console.log(isAdult);
// age = "PAOK";

// ++++++++++ UNION

let tax: number | string = 10;
tax = '$10';
console.log(tax);
let requestStatus: 'pending' | 'success' | 'error' = 'error';
// requestStatus = "random";

// Type: Any
let notSure: any = 3;
notSure = 'maybe';
notSure = false;
const books = ['gus', 'roses', 'players'];

let foundBook: string | undefined;

for (let book of books) {
	if (book === 'gas') {
		foundBook = book;
		foundBook = foundBook.toUpperCase();
		break;
	}
}
console.log(foundBook);

// Challenge
/**
 * 
Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
*/
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'delivered';
orderStatus = 'shipped';
// orderStatus = "cancelled";
console.log(orderStatus);
let discount: number | string = 20;
discount = '20%';
console.log(discount);

//++++++++++ Arrays

let prices: number[] = [11, 22, 33];
prices.push(3);
console.log(prices);
let fruit: string[] = ['apples', 'oranges'];
console.log(fruit);
let mixed: (number | string)[] = ['PAOK', 4];

console.log(mixed);
let names = ['peter'];

//Challenge

/**
 - Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
- Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
- Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.

 */
const temperatures: number[] = [22, 33];
const colors: string[] = ['blue', 'red'];
const mixedArray: (string | number)[] = ['PAOK', 4];
// mixedArray.push(false);

//++++++++++ Object Fundamentals

let car: { brand: string; year: number } = { brand: 'Toyota', year: 2020 };
// car.color = "red";

console.log(car);
let car1: { brand: string; year: number } = { brand: 'Audi', year: 2020 };
console.log(car1);

let book = { title: 'gus', price: 39 };
let pen = { title: 'pen', price: 29 };
let noteBook = { title: 'notebook' };
let items: { readonly title: string; price?: number }[] = [book, pen, noteBook];
console.log(items);

// items[0].title='New'

//Challenge
/**
 - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
- Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
- Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

 */
const bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2020 };
const laptop: { brand: string; year: number } = { brand: 'Dell', year: 3939 };

const product1 = { title: 'shirt', price: 29 };
const product2 = { title: 'pants' };
const products: { title: string; price?: number }[] = [product1, product2];
// products.push({ title: "shoe", price: "3" });
console.log(products);

// ++++++++++ Functions
// any
// config
// string
function sayHi(name: string) {
	console.log(`Hi ${name.toUpperCase()}`);
}
sayHi('Geo');
// sayHi(3)
// sayHi(2);

//  ++++++++++ Function Returns
function calculateDiscount(price: number): number | string {
	const hasDiscount = false;
	if (hasDiscount) {
		return 'discount applied';
	}
	return price * 0.9;
}
const finalPrice = calculateDiscount(100);
console.log(finalPrice);

//Challenge

/**
 - Create a new array of names.
- Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
- Use this function to check if various names are in your array and log the results.
 */
const names1: string[] = ['Geo', 'Rania', 'Tsitsikaki'];

function nameExists(name: string): boolean {
	if (names1.includes(name)) return true;
	return false;
}
function nameExists1(names: string[], name: string): boolean {
	if (names.includes(name.trim())) return true;
	return false;
}
let nameToCheck: string = 'Geo';
console.log(nameExists(nameToCheck));
nameToCheck = 'Vik';
console.log(nameExists(nameToCheck));
nameToCheck = 'Tsitsikaki';

console.log(nameExists1(names1, nameToCheck));
nameToCheck = 'PAOK';
console.log(nameExists1(names1, nameToCheck));
// console.log(nameExists(2));

// ++++++++++ Functions - Optional Parameters

function calculatePrice(price: number, discount?: number): number {
	return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);
priceAfterDiscount = calculatePrice(100);
console.log(priceAfterDiscount);

// ++++++++++ Functions - Default Parameters

function calculateScore(
	initialScore: number,
	penaltyPoints: number = 0
): number {
	return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty);
scoreAfterPenalty = calculateScore(100);
console.log(scoreAfterPenalty);

// ++++++++++ Functions - Rest Parameters
function sum(message: string, ...numbers: number[]): string {
	const doubled = numbers.map((num) => num * 2);
	console.log(doubled);
	let total = numbers.reduce((acc, cur) => acc + cur, 0);
	console.log(total);
	return `${message} ${total}`;
}
let result1 = sum('The total is : ', 1, 2, 3, 4, 5);
console.log(result1);
// ++++++++++ Functions - Void Keyword
function logMessage(message: string): void {
	console.log(message);
}
logMessage('PAOK');

// ++++++++++ Functions - Type guards

// Challenge

/**
 Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

- If the input is of type number, the function should multiply the number by 2 and log the result to the console.
- If the input is of type string, the function should convert the string to uppercase and log the result to the console.

 */

function processInput(param: string | number): void {
	if (typeof param === 'number') {
		console.log(param * 2);
	} else if (typeof param === 'string') {
		console.log(param.toUpperCase());
	}
}
processInput('oranges');
processInput(4);
// ++++++++++ Functions - Objects As Parameters

function createEmployee({ id }: { id: number }): {
	id: number;
	isActive: boolean;
} {
	return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first);
console.log(second);

//alternative

function createStudent(student: { id: number; name: string }): void {
	console.log(`Welcome to the course ${student.name}`);
}
const newStudent = {
	id: 3,
	name: 'Tsitsikaki',
	// email: "sh", excess property
};
createStudent(newStudent);

// ++++++++++ Excess Property Check
/**
 TypeScript only performs excess property checks on object literals where they're used, not on references to them.

In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.
 */
// createStudent({ id: 1, name: "bob", nationality: "greek" });

// Challenge - Functions II

/**
 Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.
 */

function processData(
	input: string | number,
	config: { reverse: boolean } = { reverse: false }
): string | number {
	if (typeof input === 'number') {
		return input * input;
	} else {
		return config.reverse
			? input.split('').reverse().join('').toUpperCase()
			: input.toUpperCase();
	}
}
let output = processData(3, { reverse: true });
console.log(output);
output = processData('paok');
console.log(output);
output = processData('PAOK', { reverse: true });
console.log(output);

// ++++++++++ Type Alias

/**
 A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias.All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.
 */
type User = {
	id: number;
	name: string;
	isActive: boolean;
};
const john: User = {
	id: 1,
	name: 'john',
	isActive: true,
};
const susan: User = {
	id: 1,
	name: 'susan',
	isActive: false,
};

function createUser(user: User): User {
	console.log(`Hello there ${user.name.toUpperCase()} !!!`);

	return user;
}
createUser({ name: 'Vik', id: 2, isActive: true });

// additional info
type StringOrNumber = string | number;

let value: StringOrNumber;
value = 4;
value = 'hi';
type Theme = 'light' | 'dark';
let theme: Theme;

function setTheme(t: Theme) {
	theme = t;
}
setTheme('dark');

// Challenge

/**
 Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

Create a Union Type: Define a type Staff that is a union of Employee and Manager.

Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
 */

type Employee = {
	id: number;
	name: string;
	department: string;
};
type Manager = {
	id: number;
	name: string;
	employees: Employee[];
};
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
	if ('employees' in staff) {
		console.log(
			`${staff.name} is a manager and they manage ${staff.employees.length} employees`
		);
	} else {
		console.log(`${staff.name} works in ${staff.department} department`);
	}
}
const alice: Employee = {
	id: 1,
	name: 'Alice',
	department: 'Sales',
};
const bob: Employee = {
	id: 1,
	name: 'Bob',
	department: 'Sales',
};
const steve: Manager = {
	id: 3,
	name: 'Steve',
	employees: [alice, bob],
};

// printStaffDetails(bob)
// printStaffDetails(alice)
printStaffDetails(steve);

// ++++++++++ Intersection Type

/**
 In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.
 */
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
	id: 1,
	name: 'How to cook a dragon',
	price: 12,
};
const book2: Book = {
	id: 2,
	name: 'How to cook a unicorn',
	price: 14,
};
const discountedBook: DiscountedBook = {
	id: 3,
	name: 'How to cook a unicorn',
	price: 15,
	discount: 0.1,
};

// ++++++++++ Type Alias - Computed Properties

/**
 Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.
 */
const propName = 'age';
type Animal = {
	[propName]: number;
};
let tiger = {
	[propName]: 5,
};

// ++++++++++ Interface Fundamentals and Methods
//allow to setup shape for objects (only objects)

interface Book1 {
	readonly isbn: number;
	title: string;
	author: string;
	genre?: string;
	//method
	printAuthor(): void;
	printTitle(message: string): string;
	//arrows
	printSomething: (someValue: number) => number;
}
const deepWork: Book1 = {
	isbn: 123,
	title: 'deep work',
	author: 'call newport',
	genre: 'self-help',
	printAuthor() {
		console.log(this.author);
	},
	printTitle(message) {
		return `${this.title} ${message}`;
	},
	//first option
	printSomething: function (someValue) {
		return someValue;
	},
};

deepWork.printAuthor();
const message = deepWork.printTitle('is great');
console.log(message);
console.log(deepWork.printSomething(3));

// Challenge

/**
- Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
 */

interface Computer {
	readonly id: number;
	brand: string;
	ram: number;
	upgradeRam(num: number): number;
	storage?: number;
}
const myComputer: Computer = {
	id: 1,
	brand: 'My computer',
	ram: 8,
	upgradeRam(num) {
		this.ram += num;
		return this.ram;
	},
};
myComputer.storage = 1;
console.log(myComputer.upgradeRam(8));
console.log(myComputer);

// ++++++++++ Interface - Merge and Extend

/**
 Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.
 */
interface Person {
	name: string;
	getDetails(): string;
}
interface DogOwner {
	dogName: string;
	getDogDetails(): string;
}

//merge
interface Person {
	age: number;
}

const person: Person = {
	name: 'Geo',
	age: 33,
	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}`;
	},
};
console.log(person.getDetails());
/**
Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.
 */
interface Employee1 extends Person {
	employeeId: number;
}
const employee1: Employee1 = {
	name: 'jane',
	age: 33,
	employeeId: 123,
	getDetails() {
		return `Name: ${this.name}, Age: ${this.age},  Employee ID: ${this.employeeId}`;
	},
};
console.log(employee1.getDetails());

interface Manager1 extends Person, DogOwner {
	managePeople(): void;
}
const manager: Manager1 = {
	name: 'bob',
	age: 33,
	dogName: 'Rex',
	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}`;
	},
	getDogDetails() {
		return `Name: ${this.dogName}`;
	},
	managePeople() {
		console.log('Managing people');
	},
};
manager.managePeople();
console.log(manager.getDogDetails());

// Challenge - Part 1

/**
 
- Define the Person interface Start by defining a Person interface with a name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
*/

// Challenge - Part 2

/**
 A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.
 */
/**
 Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.
 */
function getChallengeEmployee():
	| ChallengeDogOwner
	| ChallengeManager
	| ChallengePerson {
	const result1: number = Math.random();
	if (result1 < 0.33) {
		return { name: 'John' };
	} else if (result1 < 0.66) {
		return { name: 'John', dogName: 'Rex' };
	} else {
		return {
			name: 'John',
			managePeople() {
				console.log('Managing People');
			},
			delegateTasks() {
				console.log('Delegating tasks');
			},
		};
	}
}
interface ChallengePerson {
	name: string;
}
interface ChallengeDogOwner extends ChallengePerson {
	dogName: string;
}
interface ChallengeManager extends ChallengePerson {
	managePeople(): void;
	delegateTasks(): void;
}

const challengeEmployee:
	| ChallengePerson
	| ChallengeDogOwner
	| ChallengeManager = getChallengeEmployee();

console.log(challengeEmployee);

// challenge part 2
function isManager(
	obj: ChallengeDogOwner | ChallengeManager | ChallengePerson
): obj is ChallengeManager {
	// This is a type predicate return type that tells TypeScript that if this function returns true, the passed object is definitely of type ChallengeManager
	return 'managePeople' in obj;
}
console.log(isManager(challengeEmployee));

if (isManager(challengeEmployee)) {
	challengeEmployee.managePeople();
}

// ++++++++++ Interface vs Type Alias
// SEE README

// ++++++++++ Tuple

/**
 In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

Tuples are useful when you want to return multiple values from a function.

By default, tuples in TypeScript are not read-only. This means you can modify the values of the elements in the tuple.However, TypeScript does provide a way to make tuples read-only using the readonly keyword.
 */

let person1: [string, number] = ['Geo', 33];

let date: readonly [number, number, number] = [13, 11, 2025];
// date.push(3)
console.log(date);
function getPerson(): [string, number] {
	return ['Geo', 44];
}
let randomPerson = getPerson();
console.log(randomPerson);
let susan1: [string, number?] = ['susan1'];

// ++++++++++ Enums

/**
 Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
 */

enum ServerResponseStatus {
	Success = 200,
	Error = 500,
}

interface ServerResponse {
	result: ServerResponseStatus;
	data: string[];
}
function getServerResponse(): ServerResponse {
	return {
		result: ServerResponseStatus.Success,
		data: ['first', 'second'],
	};
}
const response: ServerResponse = getServerResponse();
console.log(response);

// ++++++++++ Enums - Reverse Mapping
/**
 In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.
 */
//reverse mapping
console.log(ServerResponseStatus);
Object.values(ServerResponseStatus).forEach((status) => {
	if (typeof status === 'number') {
		console.log(status);
	}
});

// Challenge
/**
 Define an enum named UserRole with members Admin, Manager, and Employee.
Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
Define a function named createUser that takes a User object as its parameter and returns a User object.
Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
 */
// Solution 1 - Using namespace to avoid naming conflicts
namespace EnumChallenge {
	enum UserRole {
		Admin,
		Manager,
		Employee,
	}

	type User = {
		id: number;
		name: string;
		role: UserRole;
		contact: [string, string];
	};

	function createUser(user: User): User {
		return user;
	}

	const user = createUser({
		id: 1,
		name: 'John',
		role: UserRole.Admin,
		contact: ['john@email.com', '555-0123'],
	});

	console.log(user);
}

// ++++++++++ Type Assertion

/**
Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. This is especially useful when you know more about the type of a variable than TypeScript does.
 */
namespace TypeAssertion {
	let someValue: any = 'this is a string';

	let length: number = (someValue as string).length;
	console.log(length);

	type Bird = {
		name: string;
	};
	// Assume we have a JSON string from an API or local file
	let birdString = '{"name": "Eagle"}';
	let dogString = '{"breed": "Poodle"}';

	let birdObject = JSON.parse(birdString) as Bird;
	let dogObject = JSON.parse(dogString);
	console.log(birdObject);
	let bird = birdObject as Bird;
	let dog = dogObject as Bird;
	console.log(bird.name);
	console.log(dog.name);

	enum Status {
		Pending = 'pending',
		Declined = 'declined',
	}

	type User = {
		name: string;
		status: Status;
	};

	// save Status.Pending in the DB as a string
	// retrieve string from the DB
	const statusValue = 'pending';
	const user: User = { name: 'john', status: statusValue as Status };
	console.log(user);
}

// ++++++++++ Type - Unknown

/**
 The unknown type in TypeScript is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

"error instanceof Error" checks if the error object is an instance of the Error class.
 */
namespace TypeUnknown {
	let unknownValue: unknown;
	unknownValue = 'PAOK';

	unknownValue = [1, 2, 3];
	unknownValue = 2.235234;

	// unknownValue.toFixed(2)
	// we need to check the type first

	if (typeof unknownValue === 'number') {
		console.log(unknownValue.toFixed(2));
	}

	function someCode() {
		const random = Math.random();
		if (random > 0.5) {
			throw new Error('error...');
		} else {
			throw 'some error';
		}
	}
	try {
		someCode();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		} else {
			console.log(error);
		}
	}
}

// ++++++++++ Type - Never

/**
 In TypeScript, never is a type that represents the type of values that never occur.you can't assign any value to a variable of type never.
TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.
 */
namespace TypeNever {
	type Theme = 'light' | 'dark';

	function checkTheme(theme: Theme): void {
		if (theme === 'light') {
			console.log('light theme');
			return;
		}
		if (theme === 'dark') {
			console.log('dark theme');
			return;
		}

		//in this point theme is of type never because we have exhausted all the possibilities
		theme;
	}

	//We start with Red and Blue and check ONLY for those in the Switch. Later we add Green to enum and invoke the function. SWITCH WILL FAIL SILENTLY
	enum Color {
		Red = 'Red',
		Blue = 'Blue',
		Green = 'Green',
	}

	function getColorName(color: Color) {
		switch (color) {
			case Color.Red:
				return 'Red';
			case Color.Blue:
				return 'Blue';
			case Color.Green:
				return 'Green';
			default:
				//at build time
				let unexpectedColor: never = color;
				//at run time
				throw new Error(`invalid color ${color}`);
		}
	}
	console.log(getColorName(Color.Blue));
	console.log(getColorName(Color.Red));
	console.log(getColorName(Color.Green));
}
// ++++++++++ Type Guards - Typeof

// Challenge - "typeof" guard
namespace TypeGuards {
	/**
	 Define the function checkValue that takes one parameter value of type ValueType.
Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
Finally, call the checkValue function with value as the argument.
	 */
	type ValueType = string | number | boolean;

	let value: ValueType;
	const random = Math.random();
	value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

	function checkValue(param: ValueType) {
		if (typeof param === 'string') {
			console.log(param.toLowerCase());
			return;
		} else if (typeof param === 'number') {
			console.log(param.toFixed(2));
			return;
		} else {
			console.log(`boolean ${param}`);
		}
	}
	checkValue(value);

	// Challenge - Equality Narrowing

	/**
	 In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code
	 */
	/**
	 Define a function named makeSound that takes one parameter animal of type Animal.
Inside the function, use an if statement to check if animal.type is 'dog'.
If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.
	 */
	type Dog = { type: 'dog'; name: string; bark: () => void };
	type Cat = { type: 'cat'; name: string; meow: () => void };
	type Animal = Dog | Cat;

	function makeSound(param: Animal) {
		if (param.type === 'dog') {
			param.bark();
		} else {
			param.meow();
		}
	}
	// Challenge - check for property
	/**
	 * The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.
	 * It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one
	 * that has this property.
	 */

	/**
	 * Define a function named makeSound that takes one parameter animal of type Animal.
	 * Inside the function, use an if statement with the in operator to check if the bark method exists on the animal object.
	 * If the bark method exists on animal, TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
	 * If the bark method does not exist on animal, TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
	 * Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.
	 */
	function makeSound1(param: Animal) {
		if ('bark' in param) {
			param.bark();
		} else {
			param.meow();
		}
	}
	let cat: Animal = {
		type: 'cat',
		name: 'rex',
		meow: function () {
			console.log('meow');
		},
	};
	makeSound1(cat);
	// Challenge - "Truthy"/"Falsy" guard

	/**
	 In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value

Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.

Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.

If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.
	 */

	function printLength(param: string | undefined | null): void {
		if (param) {
			console.log(param.length);
		} else {
			console.log('no string provided');
		}
	}
	printLength('PAOK');
	printLength(undefined);
	printLength(null);

	// Challenge - "instanceof" type guard
	/**
	 The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.
	 */

	/**
	  Start by defining the function using the function keyword followed by the function name, in this case checkInput.
Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
If the input is not an instance of Date (which means it must be a string), return the input as it is.
After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
You can store the return value of the function in a variable and then log it to the console to see the result.
	  */

	function checkInput(param: Date | string): string {
		if (param instanceof Date) {
			return param.getFullYear().toString();
		} else {
			return param;
		}
	}
	let year = checkInput(new Date());
	console.log(year);
	let team = checkInput('PAOK');
	console.log(team);

	// Challenge - Type Predicate
	/**
	 A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.
	 */
	type Student = {
		name: string;
		study: () => void;
	};

	type User = {
		name: string;
		login: () => void;
	};

	type Person = Student | User;

	const randomPerson = (): Person => {
		return Math.random() > 0.5
			? { name: 'john', study: () => console.log('Studying') }
			: { name: 'mary', login: () => console.log('Logging in') };
	};

	const person = randomPerson();
	console.log(person);

	function isStudent(person: Person): person is Student {
		return 'study' in person;
		// return (person as Student).study !== undefined;
	}
	console.log(isStudent(person));
	if (isStudent(person)) {
		person.study();
	} else {
		person.login();
	}
	// Challenge - Discriminated Unions and exhaustive check using the never type
	/**
	 A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.
	 */

	// starter code
	type IncrementAction = {
		type: 'increment';
		amount: number;
		timestamp: number;
		user: string;
	};

	type DecrementAction = {
		type: 'decrement';
		amount: number;
		timestamp: number;
		user: string;
	};

	type Action = IncrementAction | DecrementAction;

	function reducer(state: number, action: Action): number {
		switch (action.type) {
			case 'increment':
				return (state += action.amount);
			case 'decrement':
				return (state -= action.amount);

			default:
				const unexpectedAction: never = action;
				throw new Error(`Unexpected action : ${unexpectedAction}`);
		}
	}

	const newState = reducer(15, {
		user: 'john',
		type: 'increment',
		amount: 5,
		timestamp: 123,
	});
}

// Generics - Fundamentals

/**
 Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.

In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.
 */
namespace Generics {
	// In TypeScript, you can declare an array using two syntaxes:
	// let array1: string[] = ['Apple', 'Banana', 'Mango'];
	// let array2: number[] = [1, 2, 3];
	// let array3: boolean[] = [true, false, true];
	let array1: Array<string> = ['Apple', 'Banana'];

	// Generics - Create Generic Function and Interface

	/**
	  
	function createString(arg: string): string {
		return arg;
	}
	function createNumber(arg: number): number {
		return arg;
	}
	*/
	function genericFunction<T>(arg: T): T {
		return arg;
	}
	const someString = genericFunction<string>('hi');
	const someNumber = genericFunction<number>(4);
	console.log(someString);
	console.log(someNumber);

	interface GenericInterface<T> {
		value: T;
		getValue: () => T;
	}
	const genericString: GenericInterface<string> = {
		value: 'Hi',
		getValue() {
			return this.value;
		},
	};

	//Generics - Promise Example
	async function someFunc(): Promise<string> {
		return 'Hello';
	}

	const result = someFunc();

	// Generics - Generate Array

	function generateStringArray(length: number, value: string): string[] {
		let result: string[] = [];
		result = Array(length).fill(value);
		return result;
	}
	const arr = generateStringArray(4, 'PAOK');
	console.log(arr);

	function createArray<T>(length: number, value: T): Array<T> {
		let result: T[] = [];
		result = Array(length).fill(value);
		return result;
	}
	let arrayStrings = createArray(3, 'PAOK');
	let arrayNumbers = createArray(4, 4);
	console.log(arrayNumbers);
	console.log(arrayStrings);

	// Generics - Multiple Types
	function pair<T, U>(param1: T, param2: U): [T, U] {
		return [param1, param2];
	}
	let result2 = pair<number, string>(4, 'PAOK');
	console.log(result2);

	let res = pair(2, 2);
	console.log(res);

	// Generics - Type  constraints
	function processValue<T extends string | number>(value: T): T {
		console.log(value);
		return value;
	}
	processValue('PAOK');
	processValue(3);
	// Generics - Type  constraints SECOND EXAMPLE
	type Car = {
		brand: string;
		model: string;
	};

	const car: Car = {
		brand: 'ford',
		model: 'mustang',
	};

	type Product = {
		name: string;
		price: number;
	};

	const product: Product = {
		name: 'shoes',
		price: 1.99,
	};

	type Student = {
		name: string;
		age: number;
	};

	const student: Student = {
		name: 'peter',
		age: 20,
	};
	/**
 T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.
 */
	function printName<T extends Student | Product>(input: T): void {
		console.log(input.name);
	}
	printName(student);
	printName(product);

	/*
	The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
In other words, T must have at least the same properties and methods that { name: string } has.
	*/
	function printName2<T extends { name: string }>(input: T): void {
		console.log(input.name);
	}
	printName2(product);
	printName2(student);
	printName2(car);

	// Generics - Default Value
	interface StoreData<T> {
		data: T[];
	}
	const storeNumbers: StoreData<number> = {
		data: [1, 2, 3],
	};
	const randomStuff: StoreData<any> = {
		data: ['random', 1],
	};
}
// ++++++++++ Fetch data
namespace FetchData {
	const url: string = 'https://www.course-api.com/react-tours-project';
	// Basics
	type Tour = {
		id: string;
		name: string;
		info: string;
		image: string;
		price: string;
	};
	async function fetchData(url: string): Promise<Tour[]> {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data: Tour[] = await response.json();
			return data;
		} catch (error) {
			const errMsg =
				error instanceof Error
					? error.message
					: 'There was an error...';
			console.log(errMsg);
			return [];
		}
	}
	async function getTours() {
		const tours = await fetchData(url);
		console.log('Tours data:', tours);
		tours.forEach((tour) => console.log(tour.image));
		return tours;
	}

	getTours();

	// ZOD LIBRARY
	namespace ZOD {
		// import z
		// construct schema
		const tourSchema = z.object({
			id: z.string(),
			name: z.string(),
			info: z.string(),
			image: z.string(),
			price: z.string(),
			//zod checks for errors at build time
			// some: z.boolean(),
		});
		type Tour = z.infer<typeof tourSchema>;

		async function fetchData2(url: string): Promise<Tour[]> {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const rawData: Tour[] = await response.json();
				const result = tourSchema.array().safeParse(rawData);
				console.log(result);
				if (!result.success) {
					throw new Error(`Invalid data: ${result.error}`);
				}
				return result.data;
			} catch (error) {
				const errMsg =
					error instanceof Error
						? error.message
						: 'There was an error...';
				console.log(errMsg);
				return [];
			}
		}
		fetchData2(url);
	}
}

namespace DeclarationFiles {}
