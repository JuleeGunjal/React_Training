// Create a promise that makes a fetch call, 
// but resolves with the data only 2 seconds after the data has been received in the fetch.

const fetch = require("node-fetch");

const delayedFetch = () => {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          resolve(data); // Resolve the promise with data after 2 seconds
        }, 2000); // 2 seconds delay
      })
      .catch((error) => {
        reject(error);
      });
  });
};

delayedFetch()
  .then((data) => {
    console.log(data); // Display user info on the console after 2 seconds
  })
  .catch((error) => {
    console.error("Error:", error);
  });