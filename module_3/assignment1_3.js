// 3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from 
// one onwards into an array till the arraySize is reached.

let arraySize = 25;
let array = []; 

for(let i = 0; i < arraySize;){
  array.push(i);
  i++;
}

console.log(array); 

// Output
// [
//   0,  1,  2,  3,  4,  5,  6,  7,
//   8,  9, 10, 11, 12, 13, 14, 15,
//  16, 17, 18, 19, 20, 21, 22, 23,
//  24
// ]

console.log(array.length); // array length is 25