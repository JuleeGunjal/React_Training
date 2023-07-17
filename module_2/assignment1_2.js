const PI = 3.14;
let num1 = 3;
let str = 'a';
let name = "John";
let zero = 0;
let strZero = '0';
let arr = [];
let user = {
  name: 'john',
  age: 29,
}
let nan = NaN;
let nullValue = null;

console.log("float constant: ", typeof PI);
console.log("Integer: ", typeof num1);
console.log('character: ', typeof str);
console.log('String: ', typeof name);
console.log('Zero: ', typeof zero);
console.log('Zero as a string: ', typeof strZero);
console.log('Array: ', typeof arr);
console.log('User object: ', typeof user);
console.log('NaN: ', typeof nan);
console.log('null : ', typeof nullValue);

// if we perform any arithmetic operations with NaN , 
// it will always result in a NaN . The type checking on NaN using the
//  typeof operator doesn't help much as it returns the type as a 'number' . 


console.log(NaN + 1);  //NaN
console.log(NaN / 100);  //NaN

let arithNan = NaN -200;
console.log(isNaN(arithNan));   //true =>JavaScript has a global function called isNaN() to detect if a result is NaN. 

// In JavaScript, we can check if a variable is an array by using 3 methods, these are:

// Using isArray() method
let arr1 = ["josh", 4, function(){return 10;}];
console.log(Array.isArray(arr1)); // true

// Using instanceof operator
console.log(arr1 instanceof Array);  //true

// Using checking the constructor type 
console.log(arr1.constructor === Array); //true