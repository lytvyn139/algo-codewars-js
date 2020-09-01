//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

var number = function (array) {
  if (array === []) return [];
  const result = []
  for (let i = 0; i <= array.length - 1; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
}

console.log(number(["a", "b", "c"]));


var number = function (array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
}