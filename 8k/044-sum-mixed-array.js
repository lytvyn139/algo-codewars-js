//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number. */

let x = ['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']; //41
function sumMix(x) {
    console.log(parseInt('3'));
    console.log(parseInt(6));
    digitAraray = [];
    for (let i = 0; i < x.length; i++) {
        digitAraray.push(parseInt(x[i]));
    }
    return digitAraray.reduce((acc, curr) => acc + curr);

}
console.log(sumMix(x));

//fastest
let x = ['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']; //41
function sumMix(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

//still faster than mine
// let x = ['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']; //41
// function sumMix(x) {
//     function sumMix(x) {
//         return x.map(a => +a).reduce((a, b) => a + b);
//     }
// }
// console.log(sumMix(x));
