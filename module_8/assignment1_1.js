// Write a function that can stop execution of a function for the number of milliseconds sent as an argument
// Example:


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} 

const func = async () => {
  console.log("Printing before")
  await sleep(3000);
  console.log("Printing after")
}

func();

