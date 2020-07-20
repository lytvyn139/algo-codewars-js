//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Get the number n (n>0) to return the reversed sequence from n to 1.
// Example : n=5 >> [5,4,3,2,1]
const n = 5;
const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

console.log(reverseSeq(n));

// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
//   };
