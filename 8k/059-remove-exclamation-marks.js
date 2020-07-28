//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/javascript
/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */
function removeExclamationMarks(s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '!') {
            s[i] = '';
        }
    }
    return s.join('');
}


function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

