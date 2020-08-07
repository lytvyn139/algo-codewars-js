//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
/* Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including 
them too and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered! */
function getSum(a, b) {
    let total = 0;
    if (a === b) {
        return a;
    }

    if (a < b) {
        for (let i = a; i <= b; i++) {
            total += i;
        }
        return total;
    }

    if (b < a) {
        for (let i = b; i <= a; i++) {
            total += i;
        }
        return total;
    }
}
console.log(getSum(-1, -4));


const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

function GetSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}