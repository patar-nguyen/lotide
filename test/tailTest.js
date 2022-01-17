const tail = require('../tail');
const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe('#tail', () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);