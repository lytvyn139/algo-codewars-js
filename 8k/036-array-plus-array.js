//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
let arr1 = [100, 200, 300];
let arr2 = [400, 500, 600];
//res 2100
function arrayPlusArray(arr1, arr2) {
    const part1 = arr1.reduce((acc, curr) => acc + curr);
    const part2 = arr2.reduce((acc, curr) => acc + curr);
    return part1 + part2;
}

console.log(arrayPlusArray(arr1, arr2));


// function arrayPlusArray(arr1, arr2) {
//     let arr = [...arr1, ...arr2];
//     return arr.reduce((a, b) => a + b);
//   }

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }