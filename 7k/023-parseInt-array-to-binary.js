//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

[7] [6]  [5] [4] [3] [2] [1] [0]
128  64  32   16  8   4   2   1
*/
const binaryArrayToNumber = arr => {
    let total = 0
    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] === 1 && i === arr.length - 1) {
            total += 1;
            // console.log('first', i);
            // console.log('first total', total);
        } else if (arr[i] === 1) {
            total += Math.pow(2, arr.length - 1 - i);
            // console.log('i', i);
            // console.log('total', total)
        }
    }
    return total;
}


console.log(binaryArrayToNumber([1, 1, 1, 1])); //15


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
/*
The parseInt() function parses a string and returns an integer. The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.
*/