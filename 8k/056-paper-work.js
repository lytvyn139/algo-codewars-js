//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else return n * m
}

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}