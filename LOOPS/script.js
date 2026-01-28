// Types of loop - 
// 1. For Loop
// 2. While Loop
// 3. Do While Loop

// For Loop


for (let num = 1; num<=5; num++){  // first line is initilization second is stopping
    // Third is updation
    console.log("For loops",num)
}

// console.log("Loop ended",num);


// Calculate sum of 1 to 10

let sum = 0;

for (let i=1; i<=10; i++){
    sum = sum + i
}

console.log("sum = ",sum)

// for ( let i = 1; i>=0; i++) {
//     console.log(i);
// }

// this is a infinite loop never do this in your code

// While Loop

let i = 1;
while (i>=5) {
    console.log(i);
    i++;
}

// Do-while loop

let a = 20;

do {
    console.log("Hello");
    a++;
} while (a<= 10);

// Runs atleast once and checks condition after running code 
// At last when we write while after writing condition we have to add ;

// For-of Loop