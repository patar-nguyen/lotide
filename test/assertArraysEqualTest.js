const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require ('../eqArrays');


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 5, 3], [1, 2, 3]);// => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false