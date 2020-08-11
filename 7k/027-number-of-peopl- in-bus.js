//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function (busStops) {
    let peopleIn = 0;
    let peopleOut = 0;
    for (let i = 0; i < busStops.length; i++) {
        peopleIn += busStops[i][0];
        peopleOut += busStops[i][1];
    }
    return peopleIn - peopleOut;
}


var number = function (busStops) {
    var totalPeople = 0;
    for (var i = 0; i < busStops.length; i++) {
        totalPeople += busStops[i][0];
        totalPeople -= busStops[i][1];
    }
    return totalPeople;
}
