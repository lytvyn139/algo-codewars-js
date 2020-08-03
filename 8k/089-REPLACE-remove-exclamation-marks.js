//https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
/*
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
*/

const remove = (s, n) => {
    let result = s
    for (let i = 0; i < n; i++) {
        result = result.replace('!', '')
    }
    return result
}
console.log(remove("!!!Hi !!hi!!! !hi", 15)) // "Hi hi hi")