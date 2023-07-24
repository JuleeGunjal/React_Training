function test(callback){
 callback();
 }
 
 function callbackFunc(){
  console.log("Calling the callback function");
  return 5;
 }

// test(callbackFunc) //  Output: Calling the callback function
 // 1. Initially the local memory created for function callbackFunc and test
 // 2. Execution start at the test(callbackFunc) which calls the test function with parameter as callbackFunc function
 //   It starts executing the callback() which calls  callbackFunc().
 //  Execution of callbackFunc() started which gives console output as "Calling the callback function"
 //  and return values is saved on local as 5.
 // 3. On return statement the execution stops from callbackFunc and return s to line after callback()
 //   in test function. In test function no return statement is given so the return value now become undefined.
// and the execution stops with console output as "Calling the callback function".

// test(callbackFunc()) // TypeError: callback is not a function
// 1. The variable environment saves the function definitions.
// 2. The execution starts at test(callbackFunc()), in which it calls for a function callbackFunc()
// 3. callbackFunc() starts executing with console output as "Calling the callback function" and return 5
// 4. After the return the execution points to test(callbackFunc()) => test(5) => 5 is return value
// 5. the test function starts execution with param as 5
// 6. As it starts execution which gives callback() => 5() => TypeError: callback is not a function as => 5 is not a function


//test(() => callbackFunc()); // Calling the callback function
// 1. local environment stores the function definitions
// 2. execution starts from test(() => callbackFunc());
// 3. it goes to test with param as => callback = () => callbackFunc()
// 4. it execute the anonymous function and comes back to test(() => callbackFunc()); with controls to callbackFunc()
// 5. Execution of callbackFunc() started which gives console output as "Calling the callback function"
//  and return values is saved on local as 5.
// its comes back to test(() => callbackFunc()); => test (() => 5)
// 6. goes control to line after callback() in test which does not return anything. and the execution ends.

// What happens when you return callback() from the test function?

// function test(callback){
//   return callback(); // return value: 5
//   }

// test(callbackFunc()) // Calling the callback function

// 1. It will return the vale 5 which was return by callback function.

// What happens when you return callback from the test function?

function test(callback){
  return callback; // return value: 5, callback: 5
  }

test(callbackFunc()) // Calling the callback function
// callbackFunc() return the 5 with console output "Calling the callback function"
// After that it will reach to return statement of test in which return values is 5 and callback got values as 5

