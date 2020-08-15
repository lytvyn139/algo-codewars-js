//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    for (let i = 0; i < numbers.length; i++) {
        numbers.pop(min);
    }
}
console.log(removeSmallest([2, 2, 1, 2, 1]));// [2, 2, 2, 1]