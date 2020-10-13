//https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let age_mult1 = age1 * age1;
  let age_mult2 = age2 * age2;
  let age_mult3 = age3 * age3;
  let age_mult4 = age4 * age4;
  let age_mult5 = age5 * age5;
  let age_mult6 = age6 * age6;
  let age_mult7 = age7 * age7;
  let age_mult8 = age8 * age8;
  let added =
    age_mult1 +
    age_mult2 +
    age_mult3 +
    age_mult4 +
    age_mult5 +
    age_mult6 +
    age_mult7 +
    age_mult8;
  console.log(added);
  let squared = Math.sqrt(added);
  return Math.floor(squared / 2);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); //86

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  return Math.floor(
    Math.sqrt(arr.map((a) => a * a).reduce((b, c) => b + c)) / 2
  );
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); //86

/* Math.hypot() */
const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0;
