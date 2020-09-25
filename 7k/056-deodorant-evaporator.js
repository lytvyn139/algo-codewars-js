//https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
function evaporator(content, evap_per_day, threshold){ 
    let days = 0
    let percentage = 100.0
    while (percentage> threshold) {
        percentage -= percentage * evap_per_day/100;
        days++;
    }
    return days;
}
// content of the evaporator ml
// percentage of foam or gas lost every day
// and the threshold (threshold) in percentage beyond which the evaporator is no longer useful
