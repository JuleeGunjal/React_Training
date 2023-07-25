//  How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

const user = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

//const userClone = JSON.parse(JSON.stringify(user)); // Actual implementation in structuredClone
const userClone = structuredClone(user); // Nested object - deep clone
console.log(userClone.address.details === user.address.details); // false
console.log(user);
console.log(userClone);
userClone.address.details[0] = "5"; // replacing 4 by 5 in userClone objects details
console.log(user.address.details); // [ '4', 'Privet Drive' ]
console.log(userClone.address.details); // [ '5', 'Privet Drive' ]
