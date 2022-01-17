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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let obj1 in object1) {
    if (object1[obj1] !== object2[obj1]) {
      if (!eqArrays(object1[obj1], object2[obj1])) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  a: "Patrick",
  b: "Canada",
};

const obj2 = {
  b: "Patrick",
  a: "Patrick",
};

const obj3 = {
  a: "Ontario",
  c: "Patty",
  b: "Patricia",
};

const obj4 = {
  b: "Canada",
  a: "Patrick",
};

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj3, obj2);
assertObjectsEqual(obj1, obj4);

module.exports = assertObjectsEqual;