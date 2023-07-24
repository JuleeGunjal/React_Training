// what do you think would happen if you pass an index beyond the range of the string? 
// Or if you pass a negative index? Try it out

let str = "MyBookIn Shelf";
console.log(str[1]); // y => character at 1st position in string
console.log(str.length); //13
console.log(str[-1]); // as for negative value it gives undefined
console.log(str.length); // 13
console.log(str[50]); // undefined => At that index str have no character so without giving error
                      // it provides the value as undefined
console.log(str.length); // 13 => length won't change after we are trying to find data with invalid length
console.log(str); // MyBookInShelf
console.log(str[8]); // " " giving the blank value
