// Write a function filterObj that will filter out all the keys of a flat
// object that have objects or arrays using Object.keys and Object.entries. Example:

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};
let filterObj = filterObject(obj); //This should return {a:”Apple”, d:”Dog”}

function filterObject(obj) {
  let items = Object.entries(obj).filter(
    (item) => !(typeof item[1] == "object")
  );
  const requiredObj = Object.fromEntries(items); // from entries to object
  return requiredObj;
}

console.log(filterObj); // { a: 'Apple', d: 'Dog' }
