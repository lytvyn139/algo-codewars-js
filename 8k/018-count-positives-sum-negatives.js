//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
/* 
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
Example:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let positiveCount = 0;
  let negativeSum = 0;
  for (let i = 0; i <= input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else if (input[i] < 0) {
      negativeSum += input[i];
    }
  }
  return [positiveCount, negativeSum];
}

console.log(countPositivesSumNegatives(input));
