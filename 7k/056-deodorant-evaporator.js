//https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
function evaporator(content, evap_per_day, threshold){ 
    var days = 0;
    var gas = 100;
      while(gas >= threshold){
        gas -= gas * evap_per_day / 100;
        days++;
    }
      return days;
}
evaporator(10,10,10) //22;

// content of the evaporator ml
// percentage of foam or gas lost every day
// and the threshold (threshold) in percentage beyond which the evaporator is no longer useful
