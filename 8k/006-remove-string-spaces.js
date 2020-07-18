//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
// Simple, remove the spaces from the string, then return the resultant string.
let x = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd";
function noSpace(x) {
  let convertedToArray = x.split(" ");
  let result = "";
  for (let i = 0; i < convertedToArray.length; i++) {
    if (convertedToArray[i] === " ") {
      convertedToArray.pop(i);
    }
  }
  return convertedToArray.join("");
}
