// Aritmetic Operators
let a = 5;
let b = 2;

console.log("a =", a , " & b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); // Gives remainder and is called modulus
console.log("a ** b =", a**b); /* Exponentation like 5 to power 
of 2 */

// Unary Operators 
a++; // Is called increment and increases value by 1 
a--; // Is called decrement and decreases value by 1
console.log(a);
/* ++a and --a are also valid and are called pre increment/
decrement and a++ and a-- are called post increment / decrement */
// ++a is changed in the same line it was stated and a++ is changed later 
// Same goes for a-- and --a

// Assignment Operators 
// = is a assignemnt operator which assigns values 

let c = 5;
let d = 2;

c += 4;  // Short way of writing c = c + 4 which would be 9
c -= 4; // Short way of writing c = c - 4
c *= 4; // Short way of writing c = c * 4
c /= 4; // Short way of writing c = c / 4
c %= 4; // Short way of writing c = c % 4
c **=4; // Short way of writing c = c**4
console.log(c);

// Comparsion Operators 

let e = 5;
let f = 3;

console.log("5 == 5" , e == f);  // true boolean value
console.log(e != f); // false not equals to

console.log("5 === 5" , e === f);  // strict version of == checks the type aswell needs to be same type
console.log(e !== f); // strict version of !== checks the type aswell needs to be same type

console.log("e > f" , e > f); 
console.log(e < f);
console.log(e <= f);
console.log ( e >= f);

// Logical Operators

let g = 6;
let h = 7;

let cond1 = g < h; // true
let cond2 = g === 6;
console.log("cond1 && cond2 =" , cond1 && cond2); /* if both conditions are true
it displays true else false */
console.log("cond1 && cond2 =" , cond1 || cond2); /* Even if one condition is
true it will display true */
console.log(!(a < b)); /* It displays the opposite like if a condition should
come true it will display false and vice versa */