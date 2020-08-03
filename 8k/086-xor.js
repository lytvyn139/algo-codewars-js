https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/solutions/javascript
/*  */

const xor = (a, b) => {
    if (a === false && b === false) return false
    if (a === false && b === true) return true
    if (a === true && b === false) return true
    if (a === true && b === true) return false
}

function xor(a, b) {
    return a != b;
}