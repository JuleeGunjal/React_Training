 function sort(array, key, order) {
   const sortOrder = order === "asc" ? 1 : order === "desc" ? -1 : null;
   return array.sort((a, b) => {
     const valueA = a[key];
     const valueB = b[key];

     if (valueA < valueB) {
       return -sortOrder;
     } else if (valueA > valueB) {
       return sortOrder;
     }
     return 0;
   });
 }

// Example usage:
let users = [
  {
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender": "Male",
  },
    {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
    "gender":"Female"
  }, {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
    "gender":"Male"
  }, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
    "gender":"Female"
  }
];

// Sorting by "id" in descending order
let sortedByIdDesc = sort(users, "id", "desc");
console.log(sortedByIdDesc);
// OutPut
// [
//   {
//     id: 4,
//     first_name: 'Amata',
//     email: 'abraiden3@canalblog.com',
//     date_of_birth: '2012/05/23',
//     gender: 'Female'
//   },
//   {
//     id: 3,
//     first_name: 'Demetris',
//     email: 'dkilshall2@elpais.com',
//     date_of_birth: '2018/12/31',
//     gender: 'Male'
//   },
//   {
//     id: 2,
//     first_name: 'Raychel',
//     email: 'rmcgrady1@cpanel.net',
//     date_of_birth: '1996/11/05',
//     gender: 'Female'
//   },
//   {
//     id: 1,
//     first_name: 'Nicki',
//     email: 'ncrozier0@squarespace.com',
//     date_of_birth: '2009/05/09',
//     gender: 'Male'
//   }]

// Sorting by "first_name" in ascending order
let sortedByFirstNameAsc = sort(users, "first_name", "asc");
console.log(sortedByFirstNameAsc);

// outPut

// [
//   {
//     id: 4,
//     first_name: "Amata",
//     email: "abraiden3@canalblog.com",
//     date_of_birth: "2012/05/23",
//     gender: "Female",
//   },
//   {
//     id: 3,
//     first_name: "Demetris",
//     email: "dkilshall2@elpais.com",
//     date_of_birth: "2018/12/31",
//     gender: "Male",
//   },
//   {
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//     date_of_birth: "2009/05/09",
//     gender: "Male",
//   },
//   {
//     id: 2,
//     first_name: "Raychel",
//     email: "rmcgrady1@cpanel.net",
//     date_of_birth: "1996/11/05",
//     gender: "Female",
//   },
// ];