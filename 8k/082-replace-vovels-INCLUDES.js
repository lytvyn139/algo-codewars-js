//https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
    var vowels = "aeiouAEIOU"
    var result = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            result += "!";
        } else {
            result += s[i];
        }
    }
    return result
}

//fucking regex
function replace(s) {
    return s.replace(/[aeoiu]/ig, '!')
}

