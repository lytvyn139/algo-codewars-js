//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return max + " " + min;
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); // "542 -214"

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}