//https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
/* 
reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi'
*/
function reverse(string) {
    return string.split(' ').reverse().join(' ')
}