//https://www.codewars.com/kata/586c1cf4b98de0399300001d/solutions/javascript
function combat(health, damage) {
    if (health - damage <= 0) {
        return 0
    } else return health - damage
}

function combat(health, damage) {
    return health < damage ? 0 : health - damage
}