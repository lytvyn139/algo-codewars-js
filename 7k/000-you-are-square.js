// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
// Given an integral number, determine if it's a square number:

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};