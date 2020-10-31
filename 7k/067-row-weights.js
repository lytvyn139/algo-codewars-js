//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/solutions/javascript

const array = [13,27,49]
function rowWeights(array){
  let arrLength = array.length;
  let left = 0;
  let right = 0;
  if (array.length === 1) {
    return [...array, 0]
  }
 
  for (let i = 0; i < arrLength; i++) {
    if (i % 2 !== 0)  {
      left += array[i]
    } else {
      right += array[i]
    }
}
  return [right, left]
}

console.log(rowWeights(array))
