//https://www.codewars.com/kata/5875b200d520904a04000003

/* 
You have to write a function that accepts three parameters:
cap - is the amount of people the bus can hold excluding the driver.
on - is the number of people on the bus.
wait - is the number of people waiting to get on to the bus.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take. */

function enough(cap, on, wait) {
    if ((wait + on) < cap) {
        return 0
    } else return Math.abs(cap - on - wait)
}

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}