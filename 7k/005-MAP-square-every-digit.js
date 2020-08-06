//https://www.codewars.com/kata/546e2562b03326a88e000020

/*
Welcome.In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

squareDigits = (num) => {
    let numString = num.toString()
    let arr = []

    for (var i = 0; i < numString.length; i++) {
        arr[i] = numString[i] * numString[i]
    }
    return Number(arr.join(''))

}
squareDigits(9119); // 811181


function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) {
        return val * val;
    }
    ).join(''));
}