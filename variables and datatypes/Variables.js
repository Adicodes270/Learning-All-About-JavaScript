// console.log("Learning Javascript!")
name = "Tony Stark"; // String
age1 = 24; // Number
price = 99.99; // Number
x = null; // null
y = undefined; // undefined
isFollow = true; // boolean
// = is assignment operator
name = 25;

console.log(isFollow);
console.log(name);

FullName = "steve rogers"; // CASE SENSITIVE
fullName2 = "Steve rogers";

// full name and full@2 are not valid no space allowed 
// No special characters allowed $ _ numbers and alphabets allowed
// First letter should be _ or $ or alphabet numbers not allowed 
// we cant use some fixed terms as variable names like console 
// but Console is allowed because C is capital
// Camelcase example = totalSalary is a common way to write a 
// two word variable

let fullName = "tony stark"; // Let can be updated but not re-declared
let age = 24;
let totalPrice = 1000;
var hello = "hello"; // U should not use var as a good practice 
// let and const should be used instead of it 
// var can be re-declared and updated . Its a global scope variable
// let and const are block scope variables
var hello = "bro";
// By declare we mean writing let age = 59; again which is wrong
// But we can update by writing age = 60;
// But in var we can re-declare and update
// But it is confusing so we dont use var
const AGE1 = 50; // Cannot be re-declared or updated 
const PI = 3.14;
// const variables should be written in capital as a good practice
let a; // we can leave the variable value and just declare it
// and by default it gets undefined as value and we can update it later
// const a; // we cannot do this you have to give a value 
// { 
//     let a = 5;
//     console.log(a)
// }
// {   
//     let a = 10 ;
//     console.log(a);
// } block scope variables

// DATA TYPES IN JS 
// PRIMITIVE (7 DATATYPES)-
// NUMBER ( INT / FLOAT)
// BOOLEAN ( TRUE / FALSE)
// STRING ( ANYTHING UNDER "" '')
// UNDEFINED ( NOT DEFINED)
// NULL ( NO VALUE It prints object when we write typeof the variable)
// BigInt ( For integers larger than 2 to the power of 53 - 1)
// Symbol (A unique and immutable identifier)

// NON PRIMITIVE:
// OBJECT LIKE {name:"Vaidik", age : 14} array and function come in object
// Array : [1,2,3] like list in python
// Function ( Technically a  callable object in Javascript)

const student = {
    name:"Vaidik", // name is key and Vaidik is Value together its a key value pair
    package: "Didnt get one yet",
    age: 14,
    isPass: true
};

console.log(student);
console.log(student["age"]); // Use quotes
// or 
console.log(student.age); // Dont Use quotes
const keys = Object.keys(student); // Stores all keys of student
const values = Object.values(student); // Stores all values of students
const entries = Object.entries(student);
// Stores both values and keys of student

// In const objects key can be changed 
student.age = student.age + 1 
// or 
student["age"] = student["age"] + 1
console.log(student.age) 

// Practice Question 1
const product = {
    name : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4,
    amount_of_customers: 7002,
    deal: "Deal of the Day",
    price: "₹270",
    mrp: 285,
    discount: "5% off"

}

// in javascript "abcd" + 123 doesnt give error
// it would display abcd123

// Practice Question 2

const profile = {
    username:"vaidik",
    isFollow: true,
    btn : "Message",
    posts: 195,
    followers : "569K",
    following: 4,
    Bio: ["Vaidik", "School student" , "Age = 14" ]

        

}
console.log(typeof profile);
console.log(typeof profile.username);