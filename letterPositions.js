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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if(results[sentence[i]]){ //checks to see if any empty object has each letter of string
      results[sentence[i]].push([i]); //if letter is present, push the index of the letter
    } else {
      results[sentence[i]] = [i]; //if the letter is not present, add letter and index
    }
  }
  return results;
}

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
