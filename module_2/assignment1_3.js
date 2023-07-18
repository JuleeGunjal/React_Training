let arr = ['John', 'Ram', 'ari', 'nal'];
const constantArray = [3.147, 'Kiya', 23];
console.log("Before insertion by push: ", arr.length);
arr[0] = 'Mohan';
console.log(arr);
constantArray[0] = 'Mohan';
console.log(constantArray);
arr.push('shyam'); //Add the element at last
console.log(arr); // [ 'John', 'Ram', 'ari', 'nal', 'shyam' ]
console.log("After insertion by push: ", arr.length);
console.log("Before insertion by push on const array: ", constantArray.length);
constantArray.push('shyam'); //add the element at last
console.log(constantArray);  // [ 3.147, 'Kiya', 23, 'shyam' ]
arr.pop(); //Should remove last element
console.log("After pop operation: ", arr); // After pop operation:  [ 'John', 'Ram', 'ari', 'nal' ]
constantArray.pop();
console.log("After pop operation: ", constantArray); // After pop operation:  [ 3.147, 'Kiya', 23 ]
arr = [1, 2, 3];  // Should assign new value to arr
console.log(arr); // [ 1, 2, 3 ]
//constantArray = [1, 2,3]; // Should through error assignment to constant not possible
console.log(constantArray); // [ 3.147, 'Kiya', 23 ]
console.log(arr.shift()); // Return and remove  first element of array
console.log(arr); // [ 2, 3 ]
console.log(arr.unshift(4)); // Add the element to start of array and return the new length of array
console.log(arr); // [ 4, 2, 3 ]
console.log(constantArray.shift()); // Return and remove  first element of array => 3.147
console.log(constantArray); // [ 'Kiya', 23 ]
console.log(constantArray.unshift(4)); // Add the element to start of array and return the new length of array
console.log(constantArray); // [ 4, 'Kiya', 23 ]

// CONCLUSION:
// When the array declared as the let , we can update the its elements(add, remove, update). We can reassign the different elements to same variable. 
// When the array declared as the const , we can add or remove the elements, can also update the individual property.But We cannot re-assign that variable with different elements.

