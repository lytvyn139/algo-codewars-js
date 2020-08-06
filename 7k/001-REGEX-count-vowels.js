//https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    // str = str.split('');
    // console.log(str) no need to split
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelArr.length; j++) {
            if (str[i] === vowelArr[j]) {
                vowelsCount++
            }
        }
    }
    return vowelsCount;
}


function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function (x) {
        if (x == "a" | x == "e" | x == "i" | x == "o" | x == "u") {
            vowelsCount += 1;
        }
    });
    return vowelsCount;
}