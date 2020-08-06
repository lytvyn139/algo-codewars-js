//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

/* An isogram is a word that has no repeating letters, consecutive or non - consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case. */

/*
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/
function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isIsogram('Dermatoglyphics'));

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}