//You get an array of numbers, return the sum of all of the positives ones.
let arr = [1, -4, 7, 12];
function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}
