document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("user-list");
  const sortButton = document.getElementById("sort");
  const searchInput = document.getElementById("search");
  const loadingDiv = document.getElementById("loading");

  let users = [];

  // Fetch users from the API
  function fetchUsers() {
    loadingDiv.style.display = "block";
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        users = data.data; // API response contains user data in the 'data' field
        loadingDiv.style.display = "none";
        displayUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        loadingDiv.style.display = "none";
      });
  }

  function displayUsers(users) {
    userList.innerHTML = "";
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${user.first_name} ${user.last_name}</td>
                <td>${user.email}</td>
            `;
      userList.appendChild(row);
    });
  }

  sortButton.addEventListener("click", () => {
    users.sort((a, b) => a.first_name.localeCompare(b.first_name));
    displayUsers(users);
  });

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchText) ||
        user.last_name.toLowerCase().includes(searchText)
    );
    displayUsers(filteredUsers);
  });

  fetchUsers();
});
