// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).
//Example:

  let userNames = [{
  "id": 1,
  "first_name": "Nicki",
  }, {
  "id": 2,
  "first_name": "Raychel",
  }, {
  "id": 3,
  "first_name": "Demetris",
  }, {
  "id": 4,
  "first_name": "Amata",
  }]

  let userEmails = [{
  "id": 2,
  "email": "rmcgrady1@cpanel.net",
  }, {
  "id": 1,
  "email": "ncrozier0@squarespace.com",
  }, {
  "id": 4,
  "email": "abraiden3@canalblog.com",
  }, {
  "id": 3,
  "email": "dkilshall2@elpais.com",
  }]



function mergeById(arr1, arr2) {
  const map = new Map();

  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }

  for (const obj of arr2) {
    const id = obj.id;
    if (map.has(id)) {
      map.set(id, { ...map.get(id), ...obj });
    } else {
      map.set(id, { ...obj });
    }
  }

   return Array.from(map.values());
}

let mergedUsers = mergeById(userNames, userEmails);
console.log(mergedUsers);

// output

// [
//   { id: 1, first_name: "Nicki", email: "ncrozier0@squarespace.com" },
//   { id: 2, first_name: "Raychel", email: "rmcgrady1@cpanel.net" },
//   { id: 3, first_name: "Demetris", email: "dkilshall2@elpais.com" },
//   { id: 4, first_name: "Amata", email: "abraiden3@canalblog.com" },
// ]