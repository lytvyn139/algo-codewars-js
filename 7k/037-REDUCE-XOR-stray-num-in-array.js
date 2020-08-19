//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//not passing all tests [8,1,1,1,1,1];
// function stray(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[0] !== numbers[i]) {
//       result = numbers[i]
//     }
//   }
// console.log(numbers);  
//   return result;

// }

function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
}

function stray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            if (array[i] === array[i + 2]) {
            } else {
                return array[i + 2];
            }
        } else if (array[i] !== array[i + 2]) {
            return array[i]
        }
    }
}
console.log(stray([1, 1, 2])); //2;