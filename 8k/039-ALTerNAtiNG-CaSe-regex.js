//https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase 
// (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) 
// such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
//  For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"


String.prototype.toAlternatingCase = function () {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            str += this[i].toLowerCase();
        } else str += this[i].toUpperCase();
    }
    return str;
}

// String.prototype.toAlternatingCase = function() {
//     return [...this].map(
//       (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()),
//     ).join``;
//   };

// String.prototype.toAlternatingCase = function () {
//     return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
//   }