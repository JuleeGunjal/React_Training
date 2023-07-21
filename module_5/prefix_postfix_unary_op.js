// What is the difference between ++i and i++?

let num = 10;
console.log (++num); // increment num by 1 => 11
console.log(num++); // increment num by 1 => 11

// 1. If we are just printing prefix and postfix ++ unary operator there is no diff in them.


let a = 10;
let b = 12;
c = a + ++b;
console.log(b); // increment b by 1 => 13
d = a + b++;
console.log (c); // c will be get assigned values as => 10 + 13(increment b before adding it)=> c = 10 + 13 => 23
console.log (d); // d will be get assigned values as => 10 + 13(increment b after adding it)=> d = 10 + 13 => 23 
                // and then b incremented by 1 => 13+1 => 14
console.log(b); // incremented b by 1 => 14

// 2. while assignment the ++num will increment first and the assigned
// and num++ will assigned first and the increments