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

console.log("float constant: ", typeof PI); // float value also has number type
console.log("Integer: ", typeof num1); // integer has number type
console.log('character: ', typeof str); // No difference in character or multi word string both treated as string
console.log('String: ', typeof name); // type is string
console.log('Zero: ', typeof zero); // Integer zero treated as number
console.log('Zero as a string: ', typeof strZero); // 0 in quotes treated as string
console.log('Array: ', typeof arr); // Array is an object
console.log('User object: ', typeof user); // user type is object
console.log('NaN: ', typeof nan); // type number
console.log('null : ', typeof nullValue); // null treated as object

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