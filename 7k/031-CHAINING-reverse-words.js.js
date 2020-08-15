//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//console.log(reverseWords('double  spaced  words'));// 'elbuod  decaps  sdrow'
console.log(reverseWords('a b c d'));// 'a b c d'
// Yes, you reverse every word. For instance, a reverses to a, b reverses to b, c reverses to c, etc. apple is one word, so it reverses to elppa

function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            reversedWord = str[i] + reversedWord;
        } else {
            reversedStr += reversedWord + ' ';
            reversedWord = '';
        }
    }
    return reversedStr + reversedWord;
}




