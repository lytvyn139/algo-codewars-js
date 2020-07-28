//https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
/* 
Implement a function which convert the given boolean value into its string representation.
*/
function booleanToString(b) {
    if (b === true) {
        return 'true'
    } else return 'false'
}

function booleanToString(b) {
    return b ? 'true' : 'false'
}

function booleanToString(b) {
    return b.toString();
}

