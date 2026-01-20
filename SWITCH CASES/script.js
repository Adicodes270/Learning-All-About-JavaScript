const expr = "Mangoes";
 
switch (expr) {
    case "Mangoes":
    case "Papayas":
        console.log("Learning case statements so yeah");

    

    break;

    default:
        console.log("Sorry, I didnt make a case statement for this")
}


// switch (expression) {
//   case caseExpression1:
//     statements
//   case caseExpression2:
//     statements
//   // …
//   case caseExpressionN:
//     statements
//   default:
//     statements
// } syntax of switch statements

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1 

const action = "say_hello";
switch (action) {
  case "say_hello":
    const message1 = "hello";
    console.log(message1);
    break;
  case "say_hi":
    const message2= "hi";
    console.log(message2);
    break;
  default:
    console.log("Empty action received.");
}

// Mdn docs examples

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");

/* Summary of switch statements -
1. They are not used much also a type of conditional statements
2. default in here would answer to any other value that is not stated in case 
like else statement 
3. case "Papayas" for example would check in the variable if papaya is there in 
expression if it is there this would be runned
4. If break; is not mentioned in the switch statements it will run all switch 
statements
*/