//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

/* 
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */
function findShort(s) {
    s = s.split(' ');
    let veriSmol = s[0];
    for (let i = 0; i < s.length; i++) {

        if (s[i].length < veriSmol.length) {
            veriSmol = s[i];
        }
    }
    return veriSmol.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));