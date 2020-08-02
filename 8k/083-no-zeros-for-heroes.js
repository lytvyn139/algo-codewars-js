//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
/* 
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBoringZeros(n) {
    let str = n.toString()
    let arr = str.split('')
    if (arr[0] === '0') {
        return parseInt(arr.join(''))
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === '0') {
            arr.splice(i, 1)
        } else {
            return parseInt(arr.join(''))
        }
    }
}
console.log(noBoringZeros(960000));

/* function noBoringZeros(n) {
    while (n % 10 == 0 && n != 0) {
        n /= 10;
    }
    return n;
} */