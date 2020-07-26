//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.

// Example:
// past(0, 1, 1) == 61000
// Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
let time = (0, 1, 1);
function past(h, m, s) {
    let hourInMs = 3600000 * h;
    console.log(hourInMs)

    let minutesInSec = 60000 * m;
    console.log(minutesInSec)

    let secondsInMs = 1000 * s;
    console.log(secondsInMs)
    //let sum = hourInMs + minutesInSec + secondsInMs;
    //console.log(sum)

}
console.log(past(time))