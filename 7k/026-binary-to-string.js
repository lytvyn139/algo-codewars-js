////https://www.codewars.com/kata/551f37452ff852b7bd000139/solutions/javascript
function addBinary(a, b) {
    const radix = a + b;
    return radix.toString(2);
}

function addBinary(a, b) {
    return (a + b).toString(2)
}

function addBinary(a, b) {
    var sum = a + b;
    var binary = [];
    var x = 0, y = 0;
    y = sum;
    while (y > 1) {
        x = y % 2;
        y = Math.floor(y / 2);
        binary.push(x);
    };
    binary.push(y);
    return binary.reverse().join("");
}

