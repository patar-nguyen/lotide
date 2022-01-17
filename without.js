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

const without = function(source, remove) {
  let answer = [];
  for (let i = 0; i < source.length; i++) {
    if (!remove.includes(source[i]) && source[i] !== undefined) {
      answer.push(source[i]);
    }
  }
  return answer;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;