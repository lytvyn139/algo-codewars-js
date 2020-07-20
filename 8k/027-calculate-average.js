//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
//Write function avg which calculates average of numbers in given list.

let array = [1, 2, 3, 4];
function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(find_average(array));
