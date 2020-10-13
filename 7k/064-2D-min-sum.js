//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += Math.min(...arr[i]);
    console.log(...arr[i]);
  }

  return total;
}

// function sumOfMinimums(arr) {
//   return arr.reduce((total, subarray) => total + Math.min(...subarray), 0);
// }

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
);
