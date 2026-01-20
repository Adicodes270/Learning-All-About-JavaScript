// Conditional Statements

const age = 18;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

let mode = "dark";
let color;

if ( mode === "dark") {
    color = "black"
} else {
    color = "white"
}


console.log(color);

let num = 16;

if (num%2 === 0){
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// syntax -> rules of programming
// Good practice is in every line u should have ; at last

let status;

if (age < 18){
    console.log("Junior");
    status = "Junior";
}
else if (age > 50){
    console.log('Senior');
    status = "Senior";
} else {
    console.log("Adult");
    status = "Adult";
}

if (age < 18) console.log(age); /* One liner only applicable if u want to do
one task and is not recommended because its not readable */


// Have to learn switch case statements in MDN Docs

// Practice Questions

// let input = prompt("Enter a Number");
// console.log(input);

// if (prompt%5 === 0){
//     console.log("Multiple of 5"); 
// } else {
//     console.log("Non Multiple of 5")
// }

const marks = prompt("Enter Your Marks");
console.log(marks);
let grade;

if (marks > 79){
    grade = "A";
    console.log("Your Grade Is", grade);
}

else if (marks > 69){
    grade = "B";
    console.log("Your Grade Is", grade);
}

else if ( marks > 59) {
    grade = "C";
    console.log("Your Grade Is", grade)
}

else if ( marks > 49) {
    grade = "D";
    console.log("Your Grade Is", grade);
}

else {
    grade = "F"
    console.log("You Failed");
}