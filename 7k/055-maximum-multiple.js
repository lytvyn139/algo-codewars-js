//https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

/* 
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor
N is less than or equal to bound
N is greater than 0.

maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .
         Divisor Bound
maxMultiple(37,200) // 185


*/
const maxMultiple = (divisor, bound) => {
    for (let i = bound; i >= 0; i--) {
        if (i % divisor === 0) return i
    } 
  }