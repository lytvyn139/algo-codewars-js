//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
/* Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)

 */
const array = [6, 2, 1, 8, 10];
function sumArray(array) {
  if (array === null || array.length <= 1) {
    return 0;
  }
  let max = array[0];
  let min = array[0];
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
    result += array[i];
  }
  return result - (max + min);
}
console.log(sumArray(array));

//sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
