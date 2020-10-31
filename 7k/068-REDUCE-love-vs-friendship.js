//https://www.codewars.com/kata/59706036f6e5d1e22d000016/solutions/javascript
const wordsToMarks = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return string
    .split('')
    .map(char => alphabet.findIndex(letter => letter === char) + 1)
    .reduce((total, value) => total + value, 0)
}

const wordsToMarks = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return string
    .split('')
    .map(char => alphabet.findIndex(letter => letter === char) + 1)
    .reduce((total, value) => total + value, 0)
}
