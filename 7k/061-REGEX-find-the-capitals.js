//www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
/* 
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/
var capitals = function (word) {
  const stringSplitted = [...word];
  console.log(stringSplitted);
  let result = [];
  for (let i = 0; i < stringSplitted.length; i++) {
    if (stringSplitted[i] === stringSplitted[i].toUpperCase()) {
      result.push(i);
    }
  }

  return result;
};
console.log(capitals("CodEWaRs")); // [0,3,4,6] );

/* you don't have to make ...word it's twice longer*/

var capitals = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
console.log(capitals("CodEWaRs"));
