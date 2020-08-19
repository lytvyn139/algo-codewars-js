//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
/* 
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
*/

// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function () { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0)
        return firstAttacker;
    else if (fighter1.health <= 0)
        return fighter2.name;
    else
        return fighter1.name;
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    if (fac1 < fac2) {
        return fighter2.name;
    } else if (fac2 < fac1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}

console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4))); // "Harald"), "Harald")