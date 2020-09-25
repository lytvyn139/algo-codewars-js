//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
/* 
Given a string str, reverse it omitting all non-alphabetic characters.
Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".
*/
let str = "ultr53o?n"; //nortlu

function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('')
}
console.log(reverseLetter(str));

// g modifier: global. All matches (don't return on first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

