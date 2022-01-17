const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ ${first} === ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log(`🛑🛑🛑 ${first} !== ${second}`);
  }
};

const middle = function(array) {
  let mid = [];
  let firstIndex = "";
  let secondIndex = "";

  if (array.length <= 1 || array.length <= 2) {
    return mid = [];
  } else if (array.length % 2 === 0) {
    firstIndex = array.length / 2;
    secondIndex = array.length / 2 + 1;
    mid.push(firstIndex);
    mid.push(secondIndex);
  } else if (array.length % 2 === 1) {
    firstIndex = Math.ceil(array.length / 2);
    mid.push(firstIndex);
  }
  return mid;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]