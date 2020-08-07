//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {
    //     p0 = start of the year
    //     percent = % grow
    //     aug  = inhabitants coming or leaving each year
    //     p = population to surpass)
    let counter = 0;
    while (p0 < p) {
        p0 += ((p0 * (percent / 100)) + aug);
        counter++;
    }
    return counter;
}

console.log(nbYear(1000, 0.02, 50, 1200));

