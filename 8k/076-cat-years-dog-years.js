//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript


var humanYearsCatYearsDogYears = function (humanYears) {
    let catAge = 0;
    let dogAge = 0;
    if (humanYears === 1) {
        catAge = 15;
        dogAge = 15;
    } else if (humanYears === 2) {
        catAge = 24;
        dogAge = 15;
    } else if (humanYears > 3) {
        catAge = (humanYears - 2) * 4 + 24
        dogAge = (humanYears - 2) * 5 + 24
    }
    return [humanYears, catAge, dogAge];
}

console.log(humanYearsCatYearsDogYears(10));


function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
        case 1:
            return [1, 15, 15]
        case 2:
            return [2, 24, 24];
        default:
            return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
    }

}