//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
/* Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
 */
function bmi(weight, height) {
    let bmiIndex = weight / (height * height);
    if (bmiIndex <= 18.5) return "Underweight"
    if (bmiIndex <= 25.0) return "Normal"
    if (bmiIndex <= 30.0) return "Overweight"
    if (bmiIndex > 30) return "Obese"
}
console.log(bmi(80, 1.80));

function bmi(weight, height) {
    let bmiIndex = weight / (height * height);
    console.log(bmiIndex)
    if (bmiIndex <= 18.5) {
        return 'Underweight';
    } else if (bmiIndex <= 25.0) {
        return 'Normal';
    } else if (bmiIndex <= 30.0) {
        return 'Overweight';
    } else return 'Obese';
}

function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        case bmi > 30:
            return "Obese";
    }
}