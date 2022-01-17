const assertEqual = require('./assertEqual');

const tail = function(array) {
  let tail = [];

  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

module.exports = tail;


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);