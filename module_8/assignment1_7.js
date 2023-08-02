// Complete the above tasks with async/await.

const fetch = require("node-fetch");

const delayedFetch = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay

    return data;
  } catch (error) {
    throw error;
  }
};

(async () => {
  try {
    const data = await delayedFetch();
    console.log(data); // Display user info on the console after 2 seconds
  } catch (error) {
    console.error("Error:", error);
  }
})();
