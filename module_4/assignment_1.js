// What happens when you add a for loop/while loop/switch case block inside a function and
// use return instead of break? Do statements after the loop run? What is the return value?
//  Can we pass a return value from within a loop? Can you return from inside an if block?
// What impact does that have?

function isPrime(num){
  for(let i = 2; i < num; i++){
    if(num % i === 0) return false; // returns from here (outside of function block) when if condition satisfied with return
                                    // value as true. It is not executing statements after it.
  }
  console.log("outside of for"); // comes here if the for loop ends
  return true;                   // returns true for prime number
  console.log("After return"); //this statement never executed as return statement returns value to point of call.
}

console.log(isPrime(3));

let array = [];
function getArray(arrayLength){
   for(let i = 0; ;){
    if (i >= arrayLength) return; // return when the arraySize reaches to arrayLength 
    array.push(i);   // add the i in ith location in array
    i++;
   }
}

console.log(array);  // printing array before the function call => [] => gives an enpty array
getArray(20);  // calling the function
console.log(array); 
// output: [
//   0,  1,  2,  3,  4,  5,  6,
//   7,  8,  9, 10, 11, 12, 13,
//  14, 15, 16, 17, 18, 19
// ]

//Conclusion:  1. the for loop continues till the if condition is false. As soon as the if condition satisfied the 
// return statement executed which controls back the execution to line at the call of  the function.
// We are able to print the value of array, as array is defined in global scope and function modifies that array.
// SO we can use the return statement in break which terminates the loop and get out of function.
// the statement after the loop won't get run (does not add element in array after if condition satisfied).


function getCategory(age){
  switch (true){
    case (age > 18):
      return 'Adult';
    case (age <= 18) && (age >= 12):
      return 'Teen';
    case (age < 12):
      return 'Child';
    default:
      return 'Invalid';
  }
  console.log ("After switch block statement");
}
let age = 'AVF';
console.log(getCategory(age)); // Invalid

//Conclusion:  1. the switch case continues till the case condition is reached. As soon as the case  condition satisfied the 
// return statement executed which controls back the execution to line at the call of  the function.
// We are able to print the value passed in return.
// SO we can use the return statement in break which terminates the loop and get out of function.
// the statement after the loop won't get run (does not print  "After switch block statement" after case condition satisfied).

function checkReturn() {
  let i = 0;
  while(i < 5) {
    console.log(i);
    if (i === 2) {
      return "Loop terminated.";
    }
    i++;
  }
  console.log("This will not be executed.");
}

const result = checkReturn();
console.log(result); // Output: 0, 1, 2, "Loop terminated."

//Conclusion:  1. the for loop continues till the if condition is false. As soon as the if condition satisfied the 
// return statement executed which controls back the execution to line at the call of  the function.
// SO we can use the return statement in break which terminates the loop and get out of function.
// the statement after the loop won't get run.

function getReturnValue() {
  if (true) {
    return "Early exit.";
  }

  // Code after the if block (this won't be executed if the condition is true)

  return "Function completed.";
}

const output = getReturnValue();
console.log(output);

// Conclusion:
// If the if condition satisfied it exits from the function and return the value
// The code after return won't be executed.

// Answer:
// If you use return inside a loop, the loop will terminate immediately, and the 
// function will exit with the specified return value.
// Any statements after the loop will not be executed. 
// function will return the value given at the return statement((here return false)).
// Yes we can pass return value from the loop 
// You can use return inside an if block to exit the function early and specify a return value.
//  If the condition inside the if block evaluates to true, the function will exit immediately,
// and any code after the if block will not be executed.


