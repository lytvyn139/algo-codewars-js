//https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
const array = [5, 7, 10];
const isSortedAndHow = (array) => {
  const descending = [...array].sort((a, b) => b - a);
  const ascending = [...array].sort((a, b) => a - b);
  if (array.every((number, index) => number === descending[index]))
    return "yes, descending";
  if (array.every((number, index) => number === ascending[index]))
    return "yes, ascending";
  return "no";
};

console.log(isSortedAndHow(array));
