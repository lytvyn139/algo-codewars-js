//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

//Given a string of digits, you should replace
//any digit below 5 with '0'
//any digit 5 and above with '1'.
//Return the resulting string.

const x = "45385593107843568";
//const x = [4, 5, 3, 8, 5, 5, 9, 3, 1, 0, 7, 8, 4, 3, 5, 6, 8];
function fakeBin(x) {
  let z = Array.from(String(x), Number);
  let result = [];
  for (let i = 0; i < z.length; i++) {
    if (z[i] < 5) {
      console.log(z[i]);
      result.push(0);
    } else if (z[i] >= 5) {
      console.log(z[i]);
      result.push(1);
    }
  }
  return result.join("");
}
console.log(fakeBin(x));

//const x = "45385593107843568";
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
// console.log(fakeBin(x));

// function fakeBin(str){
//   var newStr = "";
//   for(var i=0;i<str.length;i++){
//     if(Number(str[i])>=5){
//       newStr += "1"
//     }
//     else{
//       newStr += "0";
//     }
//   }
//   return newStr;
// }
