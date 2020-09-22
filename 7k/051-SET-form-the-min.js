//https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

function minValue(values){
    let uniqueArray = Array.from((new Set(values)));
    console.log(uniqueArray);
    return Number(uniqueArray.sort().join(''));
}
console.log(minValue([6, 7, 8, 7, 6, 6])); //678
//minValue ({1, 3, 1})  ==> return (13)

