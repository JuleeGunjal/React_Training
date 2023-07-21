// Do you think JSON.stringify would work for arrays as well? What about nested objects?
//  What happens if we pass numbers, strings, undefined, null to JSON.stringify?

let user = {
  name: 'john',
  password: 'john@22',
  email : 'john@gmail.com'
}

console.log(user); // console the user object in js => { 
                                                        //   name: 'john', 
                                                        //   password: 'john@22', 
                                                        //   email: 'john@gmail.com' 
                                                        // }
console.log(JSON.stringify(user)); // {
                                      //   "name":"john",
                                      //   "password":"john@22",
                                      //   "email":"john@gmail.com"
                                      // } 
                                      // => 
                                   // converts the obj data (from js) to JSON formate
const array = ['Mahi', 2, user];
console.log(array); // [
                    //   'Mahi',
                    //    2,
                    //    { name: 'john', password: 'john@22', email: 'john@gmail.com' }
                    //  ] => console the array
console.log(JSON.stringify(array)); // it stringify the array elements
                                    // [ 
                                    //   "Mahi",
                                    //   2,
                                    //   {
                                    //     "name":"john",
                                    //     "password":"john@22",
                                    //     "email":"john@gmail.com"
                                    //   }
                                    // ]


let birthDate = {
  day: 25,
  month: 'June',
  year: 1994
}
let address = {
  lane: 'Shahu road',
  city: 'Malegaon'
}
let myProfile = {
  name: 'Julee',
  birthDate: birthDate,
  address: address
}  // nested object
console.log(myProfile); // {
                        //   name: 'Julee',
                        //   birthDate: { 
                        //                   day: 25, 
                        //                   month: 'June', 
                        //                   year: 1994 },
                        //   address: { 
                        //                 lane: 'Shahu road', 
                        //                 city: 'Malegaon'
                        //               }
                        //  }

console.log(JSON.stringify(myProfile)); // It will stringify the whole obj along with objects within it
                                        // {
                                        //   "name":"Julee",
                                        //   "birthDate":{
                                        //                  "day":25,
                                        //                  "month":"June",
                                        //                  "year":1994
                                        //                },
                                        //   "address":{
                                        //                "lane":"Shahu road",
                                        //                 "city":"Malegaon"
                                        //              }
                                        // }
// What happens if we pass numbers, strings, undefined, null to JSON.stringify?
let num = 12;
console.log(typeof num); // number
let str = 'Josh Software Company';
let unDef = undefined;
let nullValue = null;
let strNum = JSON.stringify(num);
console.log(typeof strNum); // string
console.log(JSON.stringify(num)); // 12
let strNullValue = JSON.stringify(nullValue);
console.log(typeof strNullValue); // string
console.log(JSON.stringify(str)); // "Josh Software Company"
console.log(JSON.stringify(unDef)); // undefined
let strUnDef = JSON.stringify(unDef);
console.log(typeof strUnDef); // undefined
console.log(JSON.stringify(nullValue)); // null

// Conclusion:
// We can only stringify the string, number , and null  . We cannot stringify  undefined