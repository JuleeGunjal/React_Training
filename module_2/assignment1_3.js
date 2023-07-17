let arr = ['John', 'Ram', 'ari', 'nal'];
const ARR = [3.147, 'Kiya', 23];
console.log("Before insertion by push: ", arr.length);
arr.push('shyam'); //Add the element at last
console.log(arr); // [ 'John', 'Ram', 'ari', 'nal', 'shyam' ]
console.log("After insertion by push: ", arr.length);
console.log("Before insertion by push on const array: ", ARR.length);
ARR.push('shyam'); //add the element at last
console.log(ARR);  // [ 3.147, 'Kiya', 23, 'shyam' ]
arr.pop(); //Should remove last element
console.log("After pop operation: ", arr); // After pop operation:  [ 'John', 'Ram', 'ari', 'nal' ]
ARR.pop();
console.log("After pop operation: ", ARR); // After pop operation:  [ 3.147, 'Kiya', 23 ]
arr = [1, 2, 3];  // Should assign new value to arr
console.log(arr); // [ 1, 2, 3 ]
// ARR = [1, 2,3]; // Should through error assignment to constant not possible
console.log(ARR); // [ 3.147, 'Kiya', 23 ]
console.log(arr.shift()); // Return and remove  first element of array
console.log(arr); // [ 2, 3 ]
console.log(arr.unshift(4)); // Add the element to start of array and return the new length of array
console.log(arr); // [ 4, 2, 3 ]
console.log(ARR.shift()); // Return and remove  first element of array => 3.147
console.log(ARR); // [ 'Kiya', 23 ]
console.log(ARR.unshift(4)); // Add the element to start of array and return the new length of array
console.log(ARR); // [ 4, 'Kiya', 23 ]


