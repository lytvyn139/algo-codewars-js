//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
/*
In a factory a printer prints labels for boxes. 
For one kind of boxes the printer has to use colors which are named with letters from a to m.
The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used:
3 times color a, 4 times color b, 1 time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

#Examples:
*/
function printerError(s) {
    let count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return `${count}/${s.length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')); //3/56

function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}
console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')); //3/56