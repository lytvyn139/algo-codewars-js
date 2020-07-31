//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript


/* Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any l
owercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS. */
String.prototype.isUpperCase = function () {
    return this.split('').every(char => char === char.toUpperCase())
}

// Short Solution
String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}