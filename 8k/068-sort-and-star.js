//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

/*
You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/

let arr = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];
function twoSort(s) {
    return s.sort().slice(0, 1).join('').split('').join('***')
}
console.log(arr.sort().join('***'))


function twoSort(s) {
    return s.sort()[0].split('').join('***');
}