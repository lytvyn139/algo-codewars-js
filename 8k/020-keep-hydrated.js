// https://www.codewars.com/kata/582cb0224e56e068d800003c
/* 
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1   |  3 * 0.5 = 1.5
time = 6.7---> litres = 3   |6.7 * 0.5 = 
time = 11.8--> litres = 5   23.5

 */
function litres(time) {
  return Math.floor(time * 0.5);
}
