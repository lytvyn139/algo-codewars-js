//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


// const prices = [10.99, 5.99, 3.99, 6.59];
// let sum = 0;
// prices.forEach((price) => {
//     sum += price
// });
// console.log(sum);
// let x = [1, 2, 3, 4]; //24
// const sum = x.reduce((acc, curr) => acc * curr)
// console.log(sum)

const count = 2;
const x = 5;
const countBy = (count, x) => {
    let z = [];
    for (let i = 1; i <= x; i++) {
        z.push(count * i);
    }
    return z;
}

console.log(countBy(count, x));


// const countBy = (x, count) => Array.from({length: count}, (value, key) => (key + 1) * x);