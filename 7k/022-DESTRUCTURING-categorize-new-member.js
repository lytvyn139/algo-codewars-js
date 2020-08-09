//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
//handicaps range from -2 to +26; the better the player the lower the handicap.
//the better the player the lower the handicap.
//age and an integer for the person's handicap.

function openOrSenior(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            result.push('Senior');
        } else result.push('Open')
    }
    return result;
}
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));
//1['Senior', 'Open', 'Open', 'Open'])


function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
