//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
/* Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +... */

function SeriesSum(n) {
    for (let s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
}