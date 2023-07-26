// Write a function to filter an array of strings to hold only unique values

let array = ['ram', 'shyam', 'dnyan', 'ram', 'shyam'];

let uniqueArray = (array) => {
 let result = [];
  return array.filter(item =>{  if(!result.includes(item)) {
    result.push(item)
    return item
    }
  });
 // return result;
}
console.log(array); // [ 'ram', 'shyam', 'dnyan', 'ram', 'shyam' ]
console.log(uniqueArray(array)); // [ 'ram', 'shyam', 'dnyan' ]