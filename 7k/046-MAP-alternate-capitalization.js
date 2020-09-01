//https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. 
Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
*/
function capitalize(s) {
    const even = [];
    const odd = [];
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            even.push(s[i].toUpperCase());
        } else even.push(s[i]);
    }

    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            odd.push(s[i].toUpperCase());
        } else odd.push(s[i]);
    }
    return [even.join(''), odd.join('')];
};

console.log(capitalize("abcdef"));


function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
}
console.log(capitalize("abcdef"));