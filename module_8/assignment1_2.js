//  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
//  Log the data into the console once it is received
const fetch = require("node-fetch");

const promise = fetch('https://reqres.in/api/users' );
promise
  .then((response) => response.json()) // Parse the JSON response
  .then((data) => {
    console.log(data); // Display user info on the console
  })
  .catch((error) => {
    console.error("Error:", error);
  });