//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript


function longest(s1, s2) {
    let myStr = s1.concat(s2);
    myStr = myStr.split('').sort();
    console.log(myStr)
    let result = [];
    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] === myStr[i + 1]) {
        } else result.push(myStr[i])
    }
    return result.join('');
}

console.log(longest("inmanylanguages", "theresapairoffunctions")); //acefghilmnoprstuy


function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}
console.log(longest("inmanylanguages", "theresapairoffunctions")); //acefghilmnoprstuy

//concat two string and return is with out duplicates
function longest(s1, s2) {
    var a = 'abcdefghijklmnopqrstuvwxyz';
    return a.replace(new RegExp('[^' + s1 + s2 + ']', 'g'), '');
}
console.log(longest("inmanylanguages", "theresapairoffunctions")); //acefghilmnoprstuy