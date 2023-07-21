// What happens if you pass a regular/invalid JSON string to JSON.parse? 
// What will happen if such an invalid function runs in the program? 
// Will other parts of the code execute correctly after that?

let invalidParse = (obj) => {
  console.log(JSON.parse(obj));
}

let userName = {name: "radha"};
invalidParse(JSON.stringify(userName)); // { name: 'radha' }

let nullValue = null;
invalidParse(nullValue);

let str = 'John';
invalidParse(str); // SyntaxError: Unexpected token J in JSON at position 0, Wrong quotes

// let str1 = "John says "Hello!"";
// invalidParse(str1); // SyntaxError: Unexpected identifier , "inside the string must use escape sequence \"

// let num1 = $1.00;
// invalidParse(num1); // SyntaxError: Unexpected number

let expression = 99.00 * 0.15;
invalidParse(expression);


// { name: 'radha' }
// null
// undefined:1
// John
// ^

// SyntaxError: Unexpected token J in JSON at position 0
//     at JSON.parse (<anonymous>)

//  As the error encounter other part won't work properly.