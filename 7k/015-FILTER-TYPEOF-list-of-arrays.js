//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/
function filter_list(l) {
    let result = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
            result.push(l[i]);
        }
    }
    return result;
}
console.log(filter_list([1, 'a', 'b', 0, 15]));


function filter_list(l) {
    return l.filter(function (v) { return typeof v == 'number' })
}