// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

let array = [1, -2, 3, -4, 5];

function invert(array) {
  let result = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < 0) {
      result.push(Math.abs(array[i]));
    } else result.push(-array[i]);
  }
  return result;
}

console.log(invert(array));

/* function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

function invert(array) {
   return array.map(i => 0 - i);
}
 */
