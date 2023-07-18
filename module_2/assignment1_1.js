//const PI;  through error 'const' declarations must be initialized.
const PI = 3.147;
console.log("PI at the time of initialization: ", PI);  // We can get the value of const after initialized it.
let a;  
console.log("a before assign value: ", a); // gives the value for a as 'undefined'
a = 10;  // a value will be replaced (from undefined) to 10
console.log("a after assign value: ", a);  // a after assign value:  10
// PI = 4.78; => cannot reassign the constant
a = 20; // we can reassign the value to a(let)
console.log("a after reassign value: ", a); // a after reassign value: 20

