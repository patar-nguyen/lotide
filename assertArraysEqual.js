const eqArrays = require('./eqArrays');

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ ${first} === ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log(`🛑🛑🛑 ${first} !== ${second}`);
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 5, 3], [1, 2, 3]);// => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false
