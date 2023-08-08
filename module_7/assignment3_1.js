function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const isArray = Array.isArray(obj);
  const clone = isArray ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

function getNestedKey(obj, key) {
  const keys = key.split(".");
  let result = obj;

  for (const k of keys) {
    if (!result || typeof result !== "object") {
      return undefined;
    }
    result = result[k];
  }

  return result;
}

const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England"
  }
};

console.log(deepEqual(obj, obj)); // true

const clone = deepClone(obj);
console.log(deepEqual(obj, clone)); // true

const nestedKey = getNestedKey(obj, "address.details.1");
console.log(nestedKey); // "Privet Drive"
