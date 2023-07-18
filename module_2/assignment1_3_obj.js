let user = {
  name: 'John',
  age: 30,
}
console.log(user); // { name: 'John', age: 30 }
let key = 'name';
console.log(user[key]); // John
for(key in user){
  console.log(key);
  console.log(user[key]);
}
// name
// John
// age
// 30

user.email = 'john@gmail.com'; // Should Add the emain as property in user
console.log(user); // { name: 'John', age: 30, email: 'john@gmail.com' }

delete user.age; // SHould remove age property
console.log(user); // { name: 'John', email: 'john@gmail.com' }

user.email = 'john1@gmail.com'; // change the value of email from user
console.log(user); // { name: 'John', email: 'john1@gmail.com' }

user.name = 'Julee'; //Should rename 'John' to 'Julee'
console.log(user); // { name: 'Julee', email: 'john1@gmail.com' }

user = {
  password: '12356',
  birthDate: '25-06-1994',
}  // Should replace the previous user by new one

console.log(user); // { password: '12356', birthDate: '25-06-1994' }

const constantUser = {
  height: 5.1,
  weight: 50,
}
console.log(constantUser); // { height: 5.1, weight: 50 }

constantUser.eyes = 2; // Should Add the eyes as property in USER
console.log(constantUser); // { height: 5.1, weight: 50, eyes: 2 }

delete constantUser.eyes; // Should remove age property
console.log(constantUser); //{ height: 5.1, weight: 50 }

constantUser.email = 'john1@gmail.com'; // Add the value of email to  USER
console.log(constantUser); // { height: 5.1, weight: 50, email: 'john1@gmail.com' }

constantUser.height = 5.4; //Should  replace 5.1 to 5.4
console.log(constantUser); // { height: 5.4, weight: 50, email: 'john1@gmail.com' }

constantUser = {
  password: '12356',
  birthDate: '25-06-1994',
}  // Should not  replace the previous user by new one , and should raise error

// CONCLUSION:
// When the object declared as the let , we can update the its properties(add, remove, update). We can reassign the different properties to same variable. 
// When the object declared as the const , we can add or remove the properties but cannot update the individual property.We cannot re-assign that variable with different properties.
