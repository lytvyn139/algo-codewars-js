//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.
Examples:
*/
function findNextSquare(sq) {
    let root = 0;
    let nextRoot = 0;
    if (Math.sqrt(sq) % 1 === 0) {
        root = Math.sqrt(sq)
        nextRoot = root + 1
    } else {
        return -1;
    }
    return nextRoot * nextRoot;
}

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}