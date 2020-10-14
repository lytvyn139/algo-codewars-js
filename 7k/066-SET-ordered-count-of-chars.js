//https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

/* 
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
var orderedCount = function (text) {
  let setik = [...new Set(text)];
  console.log(setik);
  return setik.map((letter) => [letter, text.split(letter).length - 1]);
};

console.log(orderedCount("Code Wars"));
