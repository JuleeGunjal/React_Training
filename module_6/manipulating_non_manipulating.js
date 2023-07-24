// What makes a method mutating or non mutating in Javascript?

// => Mutating methods are array methods that modify the original array,
// while non-mutating methods return a new array without modifying the original.


// Find out whether each of the following methods are mutating or non-mutating. How can you verify this?
let array = [2, 6, 9, 4, 12, 1, 14];
console.log(array);
// Original array:
// [
//   2, 6,  9, 4,
//  12, 1, 14
// ]

// 1.push
array.push (10);
console.log(array);
// Array after the push operation:
// [
//   2, 6,  9,  4,
//  12, 1, 14, 10
// ]

// CONCLUSION:
// push() - Adds one or more elements to the end of an array and returns manipulated array
// => push is a manipulating method

// 2.pop

// Array before pop operation:
// [
//   2, 6,  9,  4,
//  12, 1, 14, 10
// ]
array.pop();
console.log(array);
// Array after the pop operation:
// [
//   2, 6,  9,  4,
//  12, 1, 14
// ]

// CONCLUSION : 
// pop() - Removes the last element from an array and returns manipulated array
// i.e. pop() is also the manipulating method

// 3.filter

let filteredArray = array.filter(item => item > 10);
console.log("Filtered array: ", filteredArray); // OutPut : Filtered array:  [ 12, 14 ]
console.log("Array after filter manipulation: ", array);
// OutPut:
// Array after filter manipulation:  [
//   2, 6,  9, 4,
//  12, 1, 14
// ]

// CONCLUSION:
// filter: It returns the new array of elements which satisfies the given filter condition
// It does not manipulate the original array
// Thus the filter method is non manipulating method


// 4.find

let ele = array.find(item => item > 10);
console.log(ele); // 12
console.log("Array after find manipulation: ", array);
// OutPut:
// Array after find manipulation:  [
//   2, 6,  9, 4,
//  12, 1, 14
// ]

// CONCLUSION:
// find() => find and return the first element from an array which satisfies the condition without manipulating the original array
// => find() is a non-manipulating method

// 5.sort
console.log("Array before sort done: ", array);
//output:
// Array before sort done:  [
//   2, 6,  9, 4,
//  12, 1, 14
// ]
let sortedArray = array.sort((a, b) =>  a - b);
console.log("Sorted array: ", sortedArray);
// Output
// Sorted array:  [
//   1,  2,  4, 6,
//   9, 12, 14
// ]
console.log("Array after sort done: ", array);
// Array after sort done:  [
//   1,  2,  4, 6,
//   9, 12, 14
// ]
// CONCLUSION:
// sort() => sorts the original array
// => sort() is a manipulating method

// 6. map

console.log("Array before map done: ", array);
//output:
// Array before map done:  [
//   1,  2,  4, 6,
//   9, 12, 14
// ]

let mappedArray = array.map(item => item * 2);

console.log("Mapped array: ", mappedArray);
// OutPut:
// Mapped array:  [
//   2,  4,  8, 12,
//  18, 24, 28
// ]

console.log("Original Array After map operation: ", array);
// OutPut:
// Original Array After map operation:  [
//   1,  2,  4, 6,
//   9, 12, 14
// ]

// CONCLUSION:
// map(): It returns the new array with elements manipulating through the map function 
// It does not manipulate the original array
// Thus the map method is non manipulating method

// Manipulating methods:
// push(), pop(), sort();
// Non manipulating methods:
// filter(), find(), map();