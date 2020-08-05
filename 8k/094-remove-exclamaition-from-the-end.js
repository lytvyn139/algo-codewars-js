//https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
function remove(s) {
    if (s[s.length - 1] == '!') {
        return s.split('').slice(0, s.split('').length - 1).join('');
    } else {
        return s;
    }
}

const remove = s => s.replace(/!$/, '');
//$ matches end of input. /!$/ means ! at the end.