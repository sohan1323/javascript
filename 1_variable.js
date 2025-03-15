//* variables in js

//? undeclared variables
a = 5;
b = 'a';
z = a + b;

//? var keyword

var s = 123;
var t = "hello";

// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

//? let keyword

let d = 15;
let f = "world";

//? const keyword

const pi = 3.14; //These are constant values and cannot be changed

// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

//? Identifiers
// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

//? Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved(or "hoisted") to the 
// top of their containing scope during the compile phase, before the code is executed.

// for var
console.log(p);  // undefined (not a ReferenceError)
var p = 5;
console.log(p);  // 5

// let and const
// Unlike var, let and const are also hoisted, but they do not initialize the variable until the actual line of declaration is executed.This leads to the "temporal dead zone"(TDZ).
// The temporal dead zone is the time between the entering of the scope and the actual variable declaration, where accessing the variable will result in a ReferenceError.

console.log(m);  // ReferenceError: Cannot access 'x' before initialization
let m = 5;

console.log(e);  // ReferenceError: Cannot access 'y' before initialization
const e = 10;


//? variable scopes

//? global scope
// Global scope refers to variables that are declared outside of any functions or blocks. These variables 
// are accessible throughout your entire JavaScript code, from any function or block.

let globalVar = "I am a global variable!";

function test() {
    console.log(globalVar);  // Accessible inside the function
}

test();  // Outputs: "I am a global variable!"
console.log(globalVar);  // Accessible outside the function



//? function scope
// Function scope means that variables are only accessible within the function they are declared in,
// and they are not accessible from outside that function.

function example() {
    let localVar = "I am local to this function!";
    console.log(localVar);  // Accessible inside the function
}

example();  // Outputs: "I am local to this function!"
console.log(localVar);  // Error: localVar is not defined


//? block scope
// Block scope means that variables are confined to the block (usually a pair of curly braces {}) in which they are declared.
// Variables declared with let and const are block-scoped. This means they are only available inside the block where they are declared (such as inside loops or conditionals).
// var, on the other hand, is not block-scoped. It’s function-scoped, meaning that var will still be accessible outside of the block, as long as it's within the function.

if (true) {
    let blockVar = "I am inside the block!";
    const blockConst = "I am also inside the block!";
    console.log(blockVar);  // Accessible inside the block
    console.log(blockConst);  // Accessible inside the block
}

console.log(blockVar);  // Error: blockVar is not defined
console.log(blockConst);  // Error: blockConst is not defined


//? lexical scope (closure)
// Lexical scoping refers to how the scope of variables is determined by their physical location in the source code. The inner function has access to the variables from its outer function (or the global scope). 
// This is known as closures in JavaScript

function outer() {
    let outerVar = "I am from the outer function!";

    function inner() {
        console.log(outerVar);  // Accessing the outer function’s variable
    }

    inner();  // Outputs: "I am from the outer function!"
}

outer();
