//https://www.codewars.com/kata/5663f5305102699bad000056
/* 
You are given two arrays a1 and a2 of strings. 
Each string is composed with letters from a to z. 
x be any string in the first array 
y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

*/

const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
function mxdiflg(a1, a2) {
    let s1String = 10000000000000
    let l1String = 0
    let s2String = 10000000000000
    let l2String = 0

    if (a1.length == 0 || a2.length == 0) {
        return -1
    }

    for (let i = 0; i < a1.length; i++) {
        if (a1[i].length > l1String) {
            l1String = a1[i].length
        }
        if (a1[i].length < s1String) {
            s1String = a1[i].length
        }
    }
    for (let g = 0; g < a2.length; g++) {
        if (a2[g].length > l2String) {
            l2String = a2[g].length
        }
        if (a2[g].length < s2String) {
            s2String = a2[g].length
        }
    }

    let answer1 = s2String - l1String
    let answer2 = l1String - s2String
    let answer3 = l2String - s1String

    if (answer3 >= answer2) {
        return answer3
    }
    if (answer2 > answer3) {
        return answer2
    }
    console.log(s2String)
    console.log(l2String)
    console.log(s1String)
    console.log(l1String)

}
console.log(mxdiflg(a1, a2));

