//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.

// Example:
// past(0, 1, 1) == 61000
// Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
const h = 1;
const m = 53;
const s = 23;
function past(h, m, s) {
    const hourInMs = 3600000;
    const minutesInSec = 60000;
    const secondsInMs = 1000;
    let result = (hourInMs * h) + (minutesInSec * m) + (secondsInMs * s);
    return result;
}
console.log(past(h, m, s));


// function past(h, m, s) {
//     return ((h * 3600) + (m * 60) + s) * 1000;
// }