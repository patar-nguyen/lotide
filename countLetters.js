const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  let letterCount = {};

  for (let letters of string) { // loops through the string and places every value into letters variable
    if (letterCount[letters]) { //checks empty object to see if any of the 'keys' aka letters in variable letters is present
      letterCount[letters] += 1; //if the key is present increase value
    } else {
      letterCount[letters] = 1; //if key is not present add key and value
    }
  }
  return letterCount;
}

console.log(countLetters("LHL"));

module.exports = countLetters;