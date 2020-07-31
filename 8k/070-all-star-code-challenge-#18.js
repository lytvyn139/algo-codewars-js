//https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
/* All Star Code Challenge #18
Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0 */

function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter.charAt(letter)) {
            count++
        }

    }
    return count;
}


/* 
He is checking the length of the array after and substracts 1
If you have 'abcd', and split it by 'b'(the result would need to be 1) you will have [a, cd] which has length 2, 
then 2-1 its 1 
*/
function strCount(str, letter) {
    return str.split(letter).length - 1
}

