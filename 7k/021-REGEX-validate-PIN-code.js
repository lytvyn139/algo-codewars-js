//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

//4-6 digits
function validatePIN(pin) {
    return pin.match(/^(\d{4}|\d{6})$/) ? true : false;
}


function longest(s1, s2) {
    var a = 'abcdefghijklmnopqrstuvwxyz';
    return a.replace(new RegExp('[^' + s1 + s2 + ']', 'g'), '');
}
