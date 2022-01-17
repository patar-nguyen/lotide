const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0] /* function(word){
  return word[0];
}*/);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.length * 2);

console.log(results1);
console.log(results2);
console.log(results3);

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

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [12, 14, 4, 10, 6]);