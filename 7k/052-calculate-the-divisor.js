// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
    let result = 0;
    for (let i = n; i > 0; i--) {
      if (n % i === 0) result++;
    }
    return result;
}

