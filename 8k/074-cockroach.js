//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, 
rounded down to the integer (= floored).
For example:
cockroachSpeed(1.08) == 30 */

function cockroachSpeed(s) {
    const CPS = 27.7778;
    return Math.floor(s * CPS)
}