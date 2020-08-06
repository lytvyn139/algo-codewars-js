//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
    let newStr = s.toLowerCase().split('')
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].toUpperCase() + newStr[i].repeat(i)
    }
    return newStr.join('-')
}

console.log(accum("abcd"));

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}