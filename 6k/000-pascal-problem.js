//https://www.codewars.com/kata/53cae2709bbf4cb80c000575
/* Here is a classic, Pascal's triangle.
The pascal function should return a nested array, such as in the example below,
pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
However, when running the given code, the result is an empty array.
 */
function pascal(depth) {
    let sides = [[1], [1, 1]];

    if (depth === 0) {
        return [];
    } else if (depth == 1) {
        return [[1]];
    } else if (depth == 2) {
        return [[1], [1, 1]];
    } else {
        for (let i = 2; i < depth; i++) {
            insertRow(sides);
        }
    }
    return sides;
};

let insertRow = (pyramid) => {
    let previousRow = pyramid[pyramid.length - 1];
    let newRow = [1];
    for (let i = 0; i < previousRow.length - 1; i++) {
        let current = previousRow[i];
        let next = previousRow[i + 1];
        newRow.push(current + next);
    }
    newRow.push(1);
    return pyramid.push(newRow);
};

function p(d,t){if(--d)for(
t=p(d),l=t[d-1],t.push(
c=[1]),i=d;i;)c['s'
+'plice'](1,0,~~
l[i]+l[--i]);
return t||
[[1]]}
pascal
=p
