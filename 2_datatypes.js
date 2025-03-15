//* datatypes

//? primitive (simple value)
// Primitive data types are the most basic types in JavaScript. 
// They are immutable (cannot be changed once created) and passed by value (the value is copied directly).

//a.string
// Represents a sequence of characters enclosed in single ('), double ("), or backtick (`)``) quotes.

let name = "Alice";
let greeting = 'Hello, world!';
let multiLine = `This is a
multi-line string!`; // Template literals (backticks) allow multi-line strings

//b.number
// Represents both integer and floating-point numbers (no separate types for them).

let age = 25;       // Integer
let pi = 3.14;      // Floating point
let largeNumber = 1000000; // Can represent very large numbers

//c.bigint
// A special numeric type that can represent integers larger than the Number type (which is limited to 2^53-1).

let bigNumber = 1234567890123456789012345678901234567890n; // `n` suffix indicates BigInt

//d.boolean
// Represents a logical entity, which can have one of two values: true or false.

let isAdult = true;
let isOver18 = false;

//e.undefined
// A variable that has been declared but has not been assigned a value has the type undefined.

let value;
console.log(value); // Outputs: undefined

//f.null
// Represents the intentional absence of any object value. null is an object, but it’s used to represent an empty or non-existent reference.

let emptyValue = null;

//g.symbol (intro in ES6)
// Represents a unique and immutable value often used for object property keys. 
// Each Symbol is unique, even if they have the same description.

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false



//? Reference Type (complex value)
// Reference types are more complex and are passed by reference (meaning the variable holds a reference to the memory location where the data is stored).

//a.Object
// Objects are collections of key-value pairs. Keys are strings (or symbols), 
// and values can be any valid data type (primitive or reference).

let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person.name); // "John"
person.age = 31; // Modifying object properties

//b.Array
// An ordered collection of elements, which can be of any data type. Arrays are objects, but 
// they have a special syntax and behavior for working with ordered data.

let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
colors.push("yellow");  // Add item to the end of the array

//c.function
// Functions are also objects in JavaScript. They can be invoked to execute code, and they can be assigned to variables, 
// passed as arguments, and returned from other functions

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"

//d.Date
// A special object used to represent dates and times in JavaScript

let now = new Date();
console.log(now); // Current date and time

//e.RegExp
// A pattern that describes a set of strings, used for matching text or manipulating strings.

let pattern = /hello/;
let result = pattern.test("hello world");  // true


//? Type Conversion and Type Coercion

// a. Implicit Type Coercion
// JavaScript automatically converts one type to another in certain situations, 
// like when performing arithmetic operations with mixed types.

let num = 5 + "10";  // "510" (number is coerced to string)
let sum = 5 - "3";   // 2 (string is coerced to number)


// b. Explicit Type Conversion
// You can manually convert a value from one type to another using methods like String(), Number(), Boolean(), etc.

let str = "123";
let num = Number(str);   // Converts string "123" to the number 123
let booleanValue = Boolean("");  // Converts an empty string to false


//? builtin objects in javascript

// 1. Object
// The Object is the base object for all JavaScript objects. 
// It provides methods for working with and manipulating objects.

let person = { name: "Alice", age: 30 };
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Alice", 30]

// 2. Array
// An Array is used to store ordered collections of items. 
// Arrays can contain any data type and can be dynamically resized.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3
console.log(fruits[0]); // "apple"
fruits.push("orange"); // Adds a new item to the end

// 3. String
// The String object is used for manipulating and working with strings (sequences of characters).

let message = "Hello, world!";
console.log(message.toUpperCase()); // "HELLO, WORLD!"
console.log(message.includes("world")); // true

// 4. Number
// The Number object provides properties and methods for working with numbers.

let num = 42;
console.log(Number.isInteger(num)); // true
console.log(Number.parseFloat("3.14")); // 3.14

// 5. Boolean
// The Boolean object is used for handling boolean values (true or false).

let isTrue = new Boolean(true);
console.log(isTrue.valueOf()); // true

// 6. Date
// The Date object represents dates and times and provides methods to work with them.

let now = new Date();
console.log(now); // Current date and time
console.log(now.getFullYear()); // 2025 (depending on the current year)

// 7. RegExp (Regular Expression)
// The RegExp object is used for matching text patterns and performing pattern-based search, replace, and validation.

let pattern = /hello/i;
console.log(pattern.test("Hello World")); // true
let result = "abc123".replace(/\d/g, "#");
console.log(result); // "abc###"

// 8. Math
// The Math object provides mathematical constants and functions (like sqrt, cos, sin, log, etc.).

console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Random number between 0 and 1

// 9. JSON
// The JSON object is used for parsing and stringifying JSON data. 
// It's useful for working with data from APIs, local storage, and more.

let obj = { name: "Alice", age: 30 };
let jsonString = JSON.stringify(obj); // Convert to JSON string
console.log(jsonString); // '{"name":"Alice","age":30}'
let parsedObject = JSON.parse(jsonString); // Convert back to an object
console.log(parsedObject); // { name: 'Alice', age: 30 }

// 10. Error
// The Error object represents runtime errors and provides a way to handle exceptions.

try {
    throw new Error("Something went wrong!");
} catch (e) {
    console.log(e.message); // "Something went wrong!"
}

// 11. Set
// A Set is a collection of unique values. It can hold any type of value 
// (primitive or object) and ensures that no duplicate values are stored.

let numbers = new Set([1, 2, 3, 4, 4, 5]);
console.log(numbers); // Set { 1, 2, 3, 4, 5 }
console.log(numbers.has(3)); // true
numbers.add(6); // Add a new value
numbers.delete(4); // Remove a value

// 12. Map
// A Map is a collection of key-value pairs, 
// where the keys can be any data type (including objects).

let map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name")); // "Alice"
console.log(map.has("age")); // true

// 13. WeakSet
// A WeakSet is similar to Set, but the objects in a WeakSet are held weakly. This means that if there are no other references to an object, 
// it can be garbage collected

let obj = {};
let weakset = new WeakSet();
weakset.add(obj);
console.log(weakset.has(obj)); // true
obj = null; // Now the object can be garbage collected

// 14. WeakMap
// A WeakMap is similar to Map, but it holds the keys weakly. 
// This means that if the key object is no longer referenced, it can be garbage collected.

let obj = {};
let weakmap = new WeakMap();
weakmap.set(obj, "value");
console.log(weakmap.get(obj)); // "value"
obj = null; // The object is now eligible for garbage collection

// 15. Promise
// The Promise object is used for handling asynchronous operations. 
// It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Something went wrong.");
    }
});

promise.then(result => {
    console.log(result); // "Operation was successful!"
}).catch(error => {
    console.log(error); // "Something went wrong."
});


// 16. Intl
// The Intl object provides a set of constructors and functions for internationalization, 
// such as formatting numbers, dates, and currencies for different locales.

let number = 1234567.89;
let formatter = new Intl.NumberFormat('en-US');
console.log(formatter.format(number)); // "1,234,567.89"

let date = new Date();
let dateFormatter = new Intl.DateTimeFormat('en-GB');
console.log(dateFormatter.format(date)); // "15/03/2025" (depending on current date)


// 17. Typed Arrays
// JavaScript provides several typed array objects to handle binary data and work with binary buffers more efficiently. 
// These include Int8Array, Uint8Array, Int16Array, Uint16Array, Float32Array, etc

let typedArray = new Uint8Array([1, 2, 3, 4, 5]);
console.log(typedArray); // Uint8Array(5) [1, 2, 3, 4, 5]

//? typeof operator
// The typeof operator in JavaScript is used to determine the type of a given variable or expression. It returns a string indicating the type of the operand. 
// This operator is particularly useful when you want to check the data type of a variable dynamically.

let x = 42;
console.log(typeof x); // "number"

let name = "Alice";
console.log(typeof name); // "string"

let isActive = true;
console.log(typeof isActive); // "boolean"

let value;
console.log(typeof value); // "undefined"
