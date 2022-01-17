const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]