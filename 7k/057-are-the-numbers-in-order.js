//https://www.codewars.com/kata/56b7f2f3f18876033f000307/solutions/javascript
function inAscOrder(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        return false; 
      }
    }
    return true;
  }

  console.log(inAscOrder([1, 2, 4, 7, 19])); //true
  console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); //false