//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

function flattenAndSort(array) {
  let flatter = array.reduce((flat, val) => flat.concat(val), []);
  return flatter.sort((a, b) => a - b);
}
console.log(flattenAndSort[([1, 3, 5], [100], [2, 4, 6])]);

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
console.log(flattenAndSort[([1, 3, 5], [100], [2, 4, 6])]);
