//https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
function removeDuplicateWords (s) {
    let uniqueChars = [];
    s = s.split(' ')
    s.forEach((s) => {
    if (!uniqueChars.includes(s)) {
        uniqueChars.push(s);
      }
  });
  return uniqueChars.join(' ');
}
 console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); //, 'alpha beta gamma delta');)
 