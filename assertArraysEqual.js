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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 5, 3], [1, 2, 3]);// => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false
