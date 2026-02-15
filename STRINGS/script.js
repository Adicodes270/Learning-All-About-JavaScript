// Strings

let str = "Learning Js";
let str2 = 'Tejash';

console.log(str[0]);  // L

// indexing starts from 0

// Template Literals

let obj = {
    item: "pen",
    price: 10,
};


// String Interpolation
// In template literal we can add placeholders
// /n is a escape character which makes the line go to new line
// /t is a escape character which gives tab space
let output = `the cost of ${obj.item} is\n${obj.price} rupees`
let text = "Kumar\nAarav"
console.log(text.length);
/* It would give 11 characters not 12 because \n is considered as
one character */

let calc = `sum of 1 , 2 , 3 = ${1 + 2 + 3}`
// console.log("the cost of", obj.item , "is" , obj.price, "rupees")
console.log(output);
console.log(calc)

let sentence =  `Template Literal`
console.log(typeof sentence)

// String Methods
let name = "Kumar Aarav";
// All string methods never change the actual string
/* if we do name.toUpperCase() and then console log name it will be 
the same because its immutable */
// When we use methods it makes new string then does this method stuff
// String is immutable
name = name.toUpperCase();  // If we do this it will change
name.toUpperCase(); // This doesn't work 
name = name.toLowerCase();
console.log(name.toUpperCase());
console.log(name);
let trimmer = "     Virat Kumar       "
trimmer.trim() // removes whitespace from starting and ending
// The above code doesnt work because string is immutable
// We dont need to memorize string methods
trimmer = trimmer.trim(); // This works
console.log(trimmer);


// Slice method in Js

console.log(trimmer.slice(3 , 11));
// End value is not necessary to given 
/* End value is one less than the index like if end value at index
is 12 then to give the complete string we have to write 12 *?
/* So end value is non inclusive we have to give one number bigger
than what we are supposed to */

// Concat method
let concat1 = "Virat ";
let concat2 = "Kumar";

let res = concat1.concat(concat2);
// OR
let res2 = "My friend name is " + concat1 + concat2 
console.log(res);
console.log(res2);

// Replace Method

let replace = "hellololo";

console.log(replace.replace("lo", "p")); /* First found value will
be replaced */

console.log(replace.replaceAll("lo", "p")); /* All matching values
will be replaced */

console.log(replace);
replace = replace.replaceAll("lo", "p");
console.log(replace);

// CharAt Method

let Char = "I am learning Js"

console.log(str.charAt(4)); // Used to find the letter on the index
Char[0] = "H"; // Immutable string so we cannot change
// We need to create new string or replace method

Char = Char.replace(Char[0], "B");
console.log(Char);

let fullName = prompt("Enter your Full Name:");
let fullNameCleaned = fullName.replaceAll(" ","");
let len = fullNameCleaned.length;
let username = "@" + fullNameCleaned + len;
console.log(username);
